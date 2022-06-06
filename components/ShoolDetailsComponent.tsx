import React, { useEffect, useState } from "react"
import { ApplicationState, SchoolMember } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import SchoolMemberComponent from './SchoolMember';
import Button from "./basics/Button"
import EditSchoolInfoModal from './EditSchoolnfoModal';
import AddMemberModal from './AddMemberModal';
import Modal from './Modal';
import { useRouter } from "next/router";
import { getSchoolEffect, updateSchoolEffect } from "@/store/effects/school";
import toast from "react-hot-toast";
import { School } from '../store/types/School';
import Input from "./basics/Input";
import TextArea from "./basics/Textarea";
import { toBase64 } from "@/utils/common";
import { createSchoolPostEffect, getSchoolPostsEffect } from '../store/effects/schoolPost';
import { getUserInfosEffect } from "@/store/effects/auth";
import SchoolPost from "./SchoolPost";

interface Props {
    edit?: boolean;
    university?: boolean;
}

const SchoolDetailsComponent:React.FC<Props> = ({ edit, university }) => {

    //Hooks
    const router = useRouter()
    const dispatch = useDispatch()

    // Store
    const { school: { current_school:schoolFromState }, auth: { userInfos }, schoolPost: {school_post_data}  } = useSelector((state:ApplicationState) => state)

    // App data
    const current_school = edit ? userInfos as School : schoolFromState

    // States
    const [showInfos, setShowInfos] = useState<boolean>(false)
    const [showAddMemberModal, setShowAddMemberModal] = useState(false)
    const [isPrincipal, setIsPrincipal] = useState(false)
    const [memberType, setMemberType] = useState("")
    const [showTeacherModal, setShowTeacherModal] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)
    const [loadingSchool, setLoadingSchool] = useState(false)
    const [loadingSchoolPosts, setLoadingSchoolPosts] = useState(false)
    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [image, setImage] = useState<any>(null)
    const [loadingCreatePost, setLoadingCreatePost] = useState<boolean>(false)
    const [articleForm, setArticleForm] = useState({
        title: "",
        description: ""
    })
    const [schoolForm, setSchoolForm] = useState({...(current_school || {})})
    
    
    // Constants
    const schoolUuid = router.query.id || current_school?.uuid

    // Function
    const deletePrincipal = () => {
        setSchoolForm(state => ({
            ...state,
            principal: null
        }))
    }
    
    const updatePrincipal = (data:any) => {
        setSchoolForm(state => ({
            ...state,
            principal: data
        }))
    }
    
    const deleteVicePrincipal = (i:number) => {
        setSchoolForm(state => {
            const data = [...(state.vice_principals || [])].filter((vp, index) => index !== i)
            return {...state,
            vice_principals: data}
        })
    }
    
    const deleteTeacher = (i:number) => {
        setSchoolForm(state => {
            const data = [...(state.teachers || [])].filter((vp, index) => index !== i)
            console.log(data)
            return {...state,
            teachers: data}
        })
    }
    
    const updateVicePrincipal = (i:number, data:any) => {
        setSchoolForm(state => {
            return {...state,
            vice_principal: [...(state.vice_principals || [])].map((vp, index) => index === i ? data : vp)}
        })
    }

    const addUpdateMember = (data:any, prop:string, i?:number) => {
        setSchoolForm(state => {
            return {...state,
                //@ts-ignore
                [prop]: [...(state[prop] || []).map((vp, index) => index === i ? data : vp), {...data}]
            }
        })
    }

    const handleClose = () => {
        setShowInfos(false)
        setShowAddMemberModal(false)
        setShowTeacherModal(false)
        setShowContactModal(false)
        setIsPrincipal(false)
    }

    const updateSchool = () => {
        dispatch(updateSchoolEffect({
            setLoading: setLoadingUpdate,
            failCb: () => {
                toast.error("Unable to update this school data")
            },
            successCb: () => {
                dispatch(getUserInfosEffect({
                    setLoading: setLoadingUpdate,
                    successCb: () => undefined,
                    failCb: () => undefined,
                }))
            },
            payload: schoolForm
        }))
    }

    const fetchData = () => {
        dispatch(getSchoolEffect({
            setLoading: setLoadingSchool,
            failCb: () => {
                toast.error("Unable to load this school data")
            },
            successCb: (data:any) => {
                setSchoolForm({...data})
            },
            payload: schoolUuid
        }))
    }

    const fetchArticles= () => {
        dispatch(getSchoolPostsEffect({
            setLoading: setLoadingSchoolPosts,
            failCb: () => {
                toast.error("Unable to load this school data")
            },
            successCb: () => {

            },
            range: {school_uuid: String(schoolUuid)}
        }))
    }
    
    const handleSubmitCreatePost = () => {
        const payload = {
            ...articleForm,
            base_64: image
        }

        dispatch(
            createSchoolPostEffect({
                payload,
                successCb: () => {
                    setArticleForm({
                        title: "",
                        description: ""
                    })
                    setImage("")
                    fetchArticles()
                },
                failCb: () => undefined,
                setLoading: setLoadingCreatePost
            })
        )
    }
    
    // Effects
    useEffect(() => {
        if(schoolUuid) {
            fetchData()
            fetchArticles()
        }
    }, [schoolUuid])

    console.log({current_school}, {schoolForm})
    

    return (
        <div className="pb-10">

        {showInfos && <EditSchoolInfoModal handleClose={handleClose} />}

        {showAddMemberModal && (
            <AddMemberModal
                updatePrincipal={updatePrincipal}
                updateMembers={addUpdateMember}
                handleClose={handleClose}
                isPrincipal={isPrincipal}
            />
        )}
        <div className="grid grid-cols-5">

            {showTeacherModal && (
                <Modal handleClose={handleClose} className="max-w-xl">
                    <div className="text-center">
                        <p className="title">Teachers</p>
                        <p>List of the teachers</p>
                    </div>
                    {(schoolForm?.teachers || []).length === 0 && (
                        <p className="mt-8 text-center">No teacher provided</p>
                    )}
                    <div className="grid grid-cols-3 gap-4 mt-12">
                        {(schoolForm?.teachers || []).map((t:SchoolMember, i:number) => (
                            <div className="relative" key={`teacher-${i}`}>
                                {edit && <span className="absolute top-0 right-1 text-lg font-bold text-red-500 cursor-pointer" onClick={() => deleteTeacher(i)}>x</span>}
                                <SchoolMemberComponent member={t} />
                            </div>
                        ))}
                    </div>
                </Modal>
            )}
            {showContactModal && (
                <Modal handleClose={handleClose} className="max-w-xl p-4">
                    <div className="text-center">
                        <div>
                            <p className="title">Contact</p>
                            <p>You want to get in touch with us</p>
                        </div>
                        <div className="mt-12">
                            <p className="font-bold">Phone number</p>
                            <p className="text-center">673 37 84 03</p>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Side */}
            <div className="col-span-1 !h-auto !text-black">
                <div className="bg-[#fdfdfd] rounded-md p-4 shadow-xl mb-4">
                    <div className="w-full h-32 bg-gray-300 flex items-end p-4 mb-4 rounded-md bg-cover relative" style={{backgroundImage: `url(${ schoolForm?.principal?.base_64 || schoolForm?.principal?.image_url})`}}>
                    </div>
                    {schoolForm?.principal?.name ? ( <div className="p-2 bg-opacity-40 w-full rounded-md text-gray-700">
                        <small>{university ? "Director" : "Principal"}</small>
                        <p className="truncate text-black" style={{lineHeight: "15px"}}>{schoolForm?.principal?.name}</p>
                    </div>) : (
                        <p>No {university ? "director" : "principal"} specified</p>
                    )}
                    <p className="mb-2 text-sm">{university ? "Vice director" : "Vice principal"}</p>
                    {schoolForm?.vice_principals?.length === 0 && (
                        <div className="text-black">
                            <small>No member provided</small>
                        </div>
                    )}
                    <div className="grid grid-cols-4 gap-1">
                        {schoolForm?.vice_principals?.map((vp, i) => (<div key={`vice-principal-${i}`}
                        style={{backgroundImage: `url(${ vp?.base_64 || vp?.image_url})`}}
                        className="h-12 relative w-full bg-gray-200 tip-wrapper rounded-md bg-cover">
                            {edit && <span className="absolute top-0 right-1 text-lg font-bold text-red-500 cursor-pointer" onClick={() => deleteVicePrincipal(i)}>x</span>}
                            <div className="absolute -top-1/2 z-10 bg-black text-white py-1 w-max tip rounded-full px-4">
                                <small>{vp?.name}</small>
                            </div>
                        </div>))}
                    </div>
                    
                </div>
                {edit && <Button color="secondary"  className="w-full mb-4" onClick={() => {
                    setShowAddMemberModal(true)
                    setIsPrincipal(true)
                }}>Add/Update principal</Button>}
                {edit && <Button color="secondary" className="w-full mb-4" onClick={updateSchool} loading={loadingUpdate}>Save</Button>}
                {edit && (
                    <Button className="w-full"
                    onClick={() => {
                        setShowAddMemberModal(true)
                        setMemberType("teacher")
                    }}
                    >
                        + Add a member
                    </Button>
                )}
            </div>

            <div className="px-8 col-span-4 flex flex-col gap-8">

                <div className="w-full bg-[#fdfdfd] py-4 px-8 rounded-md shadow-xl">
                    <div className="flex items-center gap-4 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-400 bg-cover bg-no-repeat" style={{backgroundImage: `url(${schoolForm?.logo})`}}></div>
                            <div className="!text-black">
                                <p className="font-semibold">{schoolForm?.name}</p>
                                <p className="text-xs font-light capitalize">{schoolForm?.region}</p>
                            </div>
                            {edit && <div className="mt-4">
                                <input id="image-lgo" className="hidden" type="file" onChange={(e) => toBase64(e.target?.files![0]).then(base64 => setSchoolForm(state => ({
                                    ...state,
                                    logo: String(base64)
                                })))} />
                                <label htmlFor="image-logo" className="rounded-full py-2 px-4 border text-sm cursor-pointer border-white hover:bg-white hover:text-white text-white">
                                    {image ? "Change logo" : "Add logo"}
                                </label>
                            </div>}
                        </div>
                        <div className="flex gap-6">
                            <Button onClick={() => setShowTeacherModal(true)}>See teachers</Button>
                            <Button color="secondary" onClick={() => setShowContactModal(true)}>Contact us</Button>
                        </div>
                    </div>
                </div>

                {edit && <div>
                    <p className="mb-2">Add a new article</p>
                    <div className="bg-[#fdfdfd] rounded-md">
                        {image && <div>
                            <img className="w-full rounded-t" src={image} alt="" />
                        </div>}
                        <div className="p-8">
                            <div>
                                <small className="text-black">Title</small>
                                <Input
                                    value={articleForm.title}
                                    onChange={(e) => {setArticleForm(state => ({
                                        ...state,
                                        title: e.target.value
                                    }))}}
                                />
                            </div>
                            <div className="mt-2">
                                <small className="text-black">Description</small>
                                <TextArea
                                    className="w-full"
                                    value={articleForm.description}
                                    onChange={(e) => {setArticleForm(state => ({
                                        ...state,
                                        description: e.target.value
                                    }))}}
                                ></TextArea>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <input id="image" className="hidden" type="file" onChange={(e) => toBase64(e.target?.files![0]).then(base64 => setImage(base64))} />
                                <label htmlFor="image" className="rounded-full py-2 px-4 border text-sm cursor-pointer border-black text-black hover:bg-black hover:text-white">
                                    {image ? "Change image" : "Add an image"}
                                </label>
                                <Button color="secondary" loading={loadingCreatePost} onClick={handleSubmitCreatePost}>Publish</Button>
                            </div>
                        </div>
                    </div>
                </div>}

                {school_post_data.data.map(sp => (
                    <SchoolPost key={sp?.uuid} post={sp} />
                ))}

            </div>

        </div>
        </div>
    )
}

export default SchoolDetailsComponent
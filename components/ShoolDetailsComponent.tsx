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
import { createSchoolPostEffect } from '../store/effects/schoolPost';
import { getUserInfosEffect } from "@/store/effects/auth";

interface Props {
    edit?: boolean
}

const SchoolDetailsComponent:React.FC<Props> = ({ edit }) => {

    //Hooks
    const router = useRouter()
    const dispatch = useDispatch()

    // Constants
    const schoolUuid = router.query.id

    // Store
    const { school: { current_school:schoolFromState }, auth: { userInfos } } = useSelector((state:ApplicationState) => state)

    // App data
    const current_school = edit ? userInfos as School : schoolFromState

    // States
    const [showInfos, setShowInfos] = useState<boolean>(false)
    const [showAddMemberModal, setShowAddMemberModal] = useState(false)
    const [memberType, setMemberType] = useState("")
    const [showTeacherModal, setShowTeacherModal] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)
    const [loadingSchool, setLoadingSchool] = useState(false)
    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [image, setImage] = useState<any>(null)
    const [loadingCreatePost, setLoadingCreatePost] = useState<boolean>(false)
    const [articleForm, setArticleForm] = useState({
        title: "",
        description: ""
    })
    const [schoolForm, setSchoolForm] = useState({...(current_school || {})})
    
    
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
            const data = [...(state.vice_principal || [])].filter((vp, index) => index === i)
            return {...state,
            vice_principal: data}
        })
    }
    
    const updateVicePrincipal = (i:number, data:any) => {
        setSchoolForm(state => {
            return {...state,
            vice_principal: [...(state.vice_principal || [])].map((vp, index) => index === i ? data : vp)}
        })
    }

    const addMember = (data:any, prop:string, i:number) => {
        setSchoolForm(state => {
            return {...state,
                //@ts-ignore
            [prop]: [...(state[prop] || [])].map((vp, index) => index === i ? data : vp)}
        })
    }

    const handleClose = () => {
        setShowInfos(false)
        setShowAddMemberModal(false)
        setShowTeacherModal(false)
        setShowContactModal(false)
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
            successCb: () => {

            },
            payload: schoolUuid
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
                    fetchData()
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
        }
    }, [schoolUuid])
    

    return (
        <div className="pb-10">

        {showInfos && <EditSchoolInfoModal handleClose={handleClose} />}

        {showAddMemberModal && <AddMemberModal updateSchool={updateSchool} handleClose={handleClose} />}
        <div className="grid grid-cols-5">

            {showTeacherModal && (
                <Modal handleClose={handleClose} className="max-w-xl p-4">
                    <div className="text-center">
                        <h2>Teachers</h2>
                        <small>List of the teachers of this school</small>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {(current_school?.teachers || []).map((t:SchoolMember, i:number) => (
                            <SchoolMemberComponent key={`teacher-${i}`} />
                        ))}
                    </div>
                </Modal>
            )}
            {showContactModal && (
                <Modal handleClose={handleClose} className="max-w-xl p-4">
                    <div className="text-center">
                        <div>
                            <h2>Contact</h2>
                            <small>You want to get in touch with he school</small>
                        </div>
                        <div className="mt-4">
                            <small className="font-bold">Phone number</small>
                            <p className="text-center">673 37 84 03</p>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Side */}
            <aside className="col-span-1">
                <Button color="primary" className="w-full mb-4" onClick={updateSchool}>Save</Button>
                <div className="bg-white rounded-xl p-4 shadow-xl">
                    <div className="w-full h-32 bg-gray-300 flex items-end p-4 mb-4 rounded-xl">
                        { <div>
                            <small>Principal</small>
                            <p className="truncate" style={{lineHeight: "15px"}}>Eteme mboto</p>
                        </div>}
                    </div>
                    <small className="font-bold">Vice principals</small>
                        <div className="grid grid-cols-4 gap-1">
                            <div className="h-12 relative w-full bg-gray-200 tip-wrapper rounded-md">
                                <div className="absolute -top-1/2 z-10 bg-black text-white p-2 w-max tip">
                                    <small>Ezongo Michel</small>
                                </div>
                            </div>
                            {edit && (
                                <button className="flex justify-center items-center w-full rounded-md bg-gray-200 hover:bg-gray-300"
                                onClick={() => {
                                    setShowAddMemberModal(true)
                                    setMemberType("teacher")
                                }}
                                >
                                    <div>
                                        <p>+</p>
                                    </div>
                                </button>
                            )}
                        </div>
                </div>
            </aside>

            <div className="px-8 col-span-4 flex flex-col gap-8">

                <div className="w-full bg-white py-4 px-8 rounded-xl shadow-xl">
                    <div className="flex items-center gap-4 justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                            <div>
                                <p className="font-semibold">{current_school?.name}</p>
                                <small>{current_school?.region}</small>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <Button onClick={() => setShowTeacherModal(true)}>See teachers</Button>
                            <Button color="secondary" onClick={() => setShowContactModal(true)}>Contact us</Button>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-semibold mb-2">Add a new article</p>
                    <div className="bg-white rounded-xl">
                        {image && <div>
                            <img className="w-full rounded-t" src={image} alt="" />
                        </div>}
                        <div className="p-8">
                            <div>
                                <small>Title</small>
                                <Input
                                    value={articleForm.title}
                                    onChange={(e) => {setArticleForm(state => ({
                                        ...state,
                                        title: e.target.value
                                    }))}}
                                />
                            </div>
                            <div className="mt-2">
                                <small>Description</small>
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
                                <label htmlFor="image" className="rounded-full py-2 px-4 border-2 text-sm cursor-pointer border-black hover:bg-black hover:text-white font-semibold">
                                    {image ? "Change image" : "Add an image"}
                                </label>
                                <Button color="success" loading={loadingCreatePost} onClick={handleSubmitCreatePost}>Publish</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-xl bg-white overflow-hidden shadow-md">
                    <div className="w-full bg-gray-300 h-80">
                    </div>
                    <div className="p-8">
                        <h2>We bring school to the next level</h2>
                        <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatem laudantium voluptatibus ex, itaque adipisci ratione alias officiis ad minus accusamus voluptatum fugit quam possimus voluptates tempore ipsam reprehenderit architecto impedit odio corporis totam eligendi explicabo. Sapiente voluptatum sequi deleniti repudiandae nulla, quam fugiat sed doloremque quia ea eligendi. Non.</p>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default SchoolDetailsComponent
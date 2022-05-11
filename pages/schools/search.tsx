import React, { useEffect, useState } from "react"
import { ApplicationState } from "@/store/types"
import { useDispatch, useSelector } from "react-redux"
import Select from "@/components/basics/Select"
import DefaultLayout from '@/layouts/DefaultLayout';
import Container from '@/components/Container';
import Button from '@/components/basics/Button';
import SchoolItem from "@/components/ShoolItem";
import { RegionOption, regionOptions } from "@/utils/common";
import { getSchoolsEffect } from '../../store/effects/school';
import toast from 'react-hot-toast';
import LoadingComp from '../../components/LoadingComp';

interface Props {
}

const SearchSchool:React.FC<Props> = () => {
    // Store
    const { school: { school_data } } = useSelector((state:ApplicationState) => state)
    
    // States
    const [searchInputValue, setSearchInputValue] = useState<string>("")
    const [loadingSchools, setLoadingSchools] = useState<boolean>(false)
    const [regionOption, setRegionOption] = useState<{
        label: string;
        value: string;
    } | null>(null)

    // Hooks
    const dispatch = useDispatch()

    // Constants
    
    // Function
    const fetchData = (keyword = searchInputValue) => {
        dispatch(
            getSchoolsEffect({
                range: {
                    region: regionOption?.value,
                    page: 1,
                    per_page: 10,
                    keyword
                },
                setLoading: setLoadingSchools,
                successCb: () => {

                },
                failCb: () => {
                    toast.error("Unable to load school data")
                }
            })
        )
    }

    const handleSearch = (e:any) => {
        e.preventDefault()
        fetchData()
    }

    // Effects
    useEffect(() => {
        if(regionOption?.value)
            fetchData()
      // eslint-disable-next-line
    }, [regionOption?.value])
    

    return (
        <DefaultLayout school title={"Search a school"}>
            <Container>
                <div className="grid grid-cols-2 gap-8 divide-x" style={{height: "calc(100vh - 90px)"}}>
                    <div className="px-8 py-4">
                        <div className="max-w-xl">
                            <h2>Select a regoin</h2>
                            <small>Select the region of the school you are searching for</small>
                            <div className="mt-4">
                                <Select
                                onChange={(e) => setRegionOption(JSON.parse(e.target.value))}
                                placeholder="Select a region" options={regionOptions} />
                            </div>
                        </div>
                    </div>

                    {regionOption ?
                     <div className="px-8 py-4 flex flex-col"  style={{maxHeight: "calc(100vh - 90px)"}}>
                        <div className="max-w-xl">
                    <h2>Search a school</h2>
                    <small>Enter the name of the school you are searching for</small>
                    <div className="mt-4">
                        <form className="flex gap-4 items-center mt-4" onSubmit={handleSearch}>
                            <input className="flex-grow h-8 px-4 rounded-full" value={searchInputValue}
                            placeholder="Enter the school name"
                            onChange={(e) => setSearchInputValue(e.target.value)} />
                            <Button className="block h-8">
                                Search
                            </Button>
                        </form>
                    </div>
                        </div>
                
                        <div className="mt-4 mb-4">
                            <p className="font-bold">Results</p>
                        </div>

                        <div className="flex-grow overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                        	    <LoadingComp loading={loadingSchools} />
                                {!loadingSchools && school_data?.data.length === 0 && (
                                    <p>No school found</p>
                                )}
                                {school_data?.data.map(school => (
                                    <SchoolItem key={school?.uuid} school={school} />
                                ))}
                            </div>
                        </div>
                    </div>
                    : (
                        <div className="px-8 py-4">
                            <h2>Select a region to see school in it</h2>
                        </div>
                    )    
                }
                </div>
            </Container>
        </DefaultLayout>
    )
}

export default SearchSchool
// import { Icon } from "@iconify/react"
import { Fragment, useRef, useState } from "react"
import { useClickOutsideClose } from "@/utils/hooks"
import { v4 as uuidv4 } from "uuid"

interface SelectProps {
    className?: string,
    defaultValue?: string,
    placeHolder?: string,
    black?: boolean,
    style?:object,
    options?: {
        label: any,
        value: string | number,
    }[],
    onChange?: (e:any) => void
}

// Effet de bord volontaire
let skip = false;
const Select = ({defaultValue, className, onChange, style, placeHolder, options, black, ...otherProps}: SelectProps) => {
    const [value, setValue] = useState(options ? options[0] : null)
    const optionsRef = useRef(null)
    const btnRef = useRef(null)
    useClickOutsideClose(optionsRef, () => {
        changeShowOptionState(skip)
        skip = false
    }, "click")
    const changeShowOptionState = (skip=false, state=false) => {
        if(!skip) {
            setShowOptions(state)
        }
    }
    const [showOptions, setShowOptions] = useState(false)
    return (

        <div className="relative">
            <button
                ref={btnRef}
                id="dropdownButton"
                style={style}
                /* @ts-ignore */
                dataDropdownToggle="dropdown"
                className={`${black ? "text-black" : "text-white"} bg-transparent intent border ${black ? "border-black" : "border-white"} text-md px-4 py-2.5 text-center rounded-full inline-flex items-center ${className ? ` ${className}` : ""}`}
                type="button"
                onMouseDown={() => {
                    skip = true
                    changeShowOptionState(false, !showOptions)
                }}
            >
                <p className="flex items-center justify-between w-full gap-2">
                    <span>{value?.label || placeHolder}</span>
                    {/* <Icon icon="bx:bxs-down-arrow" /> */}
                </p>
            </button>

            <div ref={optionsRef} id="dropdown" className={`${showOptions ? "absolute" : "hidden"} z-10 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 top-full left-0 mt-2`}>
                <ul className="py-1" aria-labelledby="dropdownButton">
                    {options?.map((opt) => (
                        <li
                            key={uuidv4()}
                            className="cursor-pointer"
                            onClick={() => {
                                let e = {
                                    target: {
                                        value: ""
                                    }
                                }
                                e.target.value = String(opt.value)
                                setValue(opt)
                                onChange instanceof Function && onChange(e)
                                setShowOptions(false)
                            }}
                        >
                            <span className="block py-2 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{opt.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


        // <div
        //     classN
        // onChange={() => {
        //         let e = {
        //             target: {
        //                 value: ""
        //             }
        //         }
        //         setValue(e.target.value)
        //         // @ts-ignore
        //         onChange instanceof Function && onChange(e)
        //     }} {...otherProps} className={`relative border bg-transparent border-black px-4 py-3 flex justify-between outline-none items-center${className ? ` ${className}` : ""}`}>
        //     {value}
        //     <div >

        //     </div>
        // </div>
    )
}

export default Select

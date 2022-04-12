// import { Icon } from "@iconify/react"
import { Fragment, useRef, useState } from "react"
import { useClickOutsideClose } from "@/utils/hooks"
import Select, { MultiValue, SingleValue } from "react-select"

interface Option {
    label: string,
    value: string | number,
}

interface SelectProps {
    className?: string,
    name?: string,
    label?: string,
    isMulti?: boolean,
    id?: string,
    defaultValue?: string,
    placeholder?: string,
    black?: boolean,
    style?:object,
    options?: Option[],
    onChange?: (e:object) => void
}

const SelectComponent = ({defaultValue, className, onChange, style, placeholder, options, black, name, id, isMulti, label, ...otherProps}: SelectProps) => {
    const [value, setValue] = useState<MultiValue<Option> | SingleValue<Option>>()
    
    return (
        <div className="text-black">
            {label && <label htmlFor={id} className="text-sm font-semibold">{label}</label>}
            <div className="mt-1">
                <Select
                    name={name ||id}
                    id={id ||name}
                    value={value}
                    classNamePrefix="react-select"
                    options={options}
                    placeholder={placeholder}
                    isMulti={isMulti}
                    onChange={(value:SingleValue<Option> | MultiValue<Option>) => {
                        setValue(value)
                        const e = {
                            target: {
                                value: JSON.stringify(value),
                                name: name || id,
                                id: id || name
                            }
                        }
                        if(onChange) {
                            onChange(e)
                        }
                    }}

                />
            </div>
        </div>
    )
}

export default SelectComponent

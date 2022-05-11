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
    onChange?: (e:any) => void,
    initialValue?: Option
}

const SelectComponent = ({defaultValue, className, onChange, style, placeholder, options, black, name, id, isMulti, label, initialValue, ...otherProps}: SelectProps) => {
    const [value, setValue] = useState<any>(initialValue)
    
    return (
        <div className="text-black">
            {label && <small>{label}</small>}
            <div className="mt-1">
                <Select
                    name={name ||id}
                    id={id ||name}
                    value={value}
                    classNamePrefix="react-select react-select_custom"
                    className="text-sm"
                    styles={{
                        control: (items) => ({
                            ...items,
                            borderColor: "rgb(229, 231, 235)",
                            borderRadius: 999,
                            paddingLeft: 5
                        })
                    }}
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

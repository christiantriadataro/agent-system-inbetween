import {Label} from "@/components/ui/label";
import {ChangeEvent, useState} from "react";

interface InputWithLabelProps {
    label: string,
    handleDataChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    text?: string
}

const InputwithLabel = ({label, handleDataChange, value, text="text"}: InputWithLabelProps) => {
    const [showLabel, setShowLabel] = useState(false);
    const [placeholder, setPlaceholder] = useState(label);

    const handleFocus = () => {
        setShowLabel(true);
        setPlaceholder("")
    }

    const handleBlur = () => {
        setShowLabel(false);
        setPlaceholder(`${label}:`)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleDataChange(event);
        setShowLabel(false);
    }


    return (
        <div className="flex flex-col gap-1 w-full mt-1.5">
            <Label
                className={`text-[11px] transition duration-300 relative ${showLabel ? "opacity-100" : "translate-y-12 opacity-0"}`}>{label}: </Label>
            <input type={text}
                   placeholder={`${placeholder}`}
                   onFocus={handleFocus}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={value}
                   className="w-full text-[10px] leading-3 font-semibold h-9 bg-white text-[#0E0E0E] pl-4 border-2 rounded-md border-another"
            />
        </div>
    )
}

export default InputwithLabel
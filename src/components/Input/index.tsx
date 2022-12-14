import { ChangeEvent } from "react";
import { StyledInput } from "./styles"


type InputProps = {
    placeholder: string,
    onChange: (value: string) => void;
}

export const Input = ({ placeholder, onChange }: InputProps) => {
    return (
        <StyledInput
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        />
    )
}
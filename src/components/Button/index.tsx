import { ChangeEvent, ReactNode } from "react";
import { StyledButton } from "./styles"


type ButtonProps = {
    children: ReactNode,
    onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}
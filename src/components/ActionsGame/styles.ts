import styled from "styled-components";


type Action = {
    disabled: boolean
}

export const Action = styled.button<Action>`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        opacity: ${props => props.disabled ? '1' : '0.8'};
    }
    &:hover {
        opacity: ${props => props.disabled ? '1' : '0.6'};
    }
`;
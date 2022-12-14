import styled from "styled-components";


type Modal = {
    open: boolean
}
export const ModalStyled = styled.div<Modal>`
    width: 80%;
    background-color: #ECECEC;
    border-radius: 12px;
    padding: 16px;
    position: absolute;
    top: 150px;
    transition: 0.3s ease;
    top: ${props => props.open ? "5%" : "-100%"};
    opacity: ${props => props.open ? "1" : "0"};
    z-index: 2;
`;

export const CloseModal = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 2%;
    top: 2%;

    background: #1A1A1A;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    color: #ECECEC;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;

    cursor: pointer;
`;
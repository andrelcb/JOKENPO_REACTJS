import { Flex, Spacer, Typography } from "../../styles"
import * as C from "./styles"

type ModalProps = {
    title: string,
    text: string,
    open: boolean,
    handleOpenModal: (value: boolean) => void,

}

export const Modal = ({ text, title, handleOpenModal, open }: ModalProps) => {
    return (
        <C.ModalStyled open={open}>
            <Flex direction="column">
                <Typography primary>{title}</Typography>
                <Spacer margin="8px" />
                <C.CloseModal onClick={() => handleOpenModal(false)}>X</C.CloseModal>
                <Typography primary>{text}</Typography>
            </Flex>
        </C.ModalStyled>
    )
}
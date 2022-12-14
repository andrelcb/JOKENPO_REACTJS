import styled, { createGlobalStyle, StyledComponent } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
        border:none;
        outline:none;
        transition: 0.3s ease;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100%;
        height:100vh;
        justify-content: center;
        display: flex;
        background-color: #1A1A1A;
        color #FFF;
    }

    button{
        cursor: pointer;

        &:hover: {
            opacity:0.8
        }

        &:active {
            opacity: 0.6;
        }

    }
`;

export const Container = styled.div`
    width: 980px;
    padding: 20px 50px;
`;


type Flex = {
    align?: string,
    justify?: string,
    direction?: string,
    gap?: string
}

export const Flex = styled.div<Flex>`
    display: flex;
    width: 100%;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    gap: ${props => props.gap || '16px'};
`;
type Spacer = {
    margin?: string
}
export const Spacer = styled.div<Spacer>`
    width: 100%;
    margin: ${props => props.margin || '20px'};
`;


type Typography = {
    fontWeight?: string,
    size?: string,
    lineHeight?: string,
    primary?: boolean,
}
export const Typography = styled.p<Typography>`
    font-weight: ${props => props.fontWeight || "700"};
    font-size: ${props => props.size || "18px"};
    line-height: ${props => props.lineHeight || "27px"};
    color: ${props => props.primary ? '#1A1A1A' : '#ECECEC'};
`;

export const Rules = styled.button`
    width: 100%;
    background: transparent;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #ECECEC;
`;
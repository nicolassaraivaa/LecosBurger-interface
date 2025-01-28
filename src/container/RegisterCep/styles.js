import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.secondBlack};
    height: 100vh;
    width: 100vw;

    @media (max-width: 1300px) {
        height: 100%
    }

    @media (min-height: 840px) {
        height: 100vh;
    }

`

export const Header = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    img{
        width: 8rem;
    }
`

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h3{
        font-size: 1.5rem;
    }

    @media (min-width: 1000px) {
        width: 25%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`
export const InputGroup = styled.div`
    p{
        margin-top: 0.36rem;
        font-size: 0.7rem;
        color: ${props => props.theme.red};
    }
`

export const ErrorCep = styled.div`
    margin-top: -1.125rem;
    font-size: 0.7rem;
    color: ${props => props.theme.red};

`

export const InputCep = styled.div`
    display: flex;
    gap: 1rem;
`

export const ContainerCheckBox = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    label{
        color: ${props => props.theme.white};
        font-size: 0.9rem;
    }
`

export const Input = styled.input` 
    padding: 0.7rem;
    border-radius: 1rem;
    width: 100%;
    background-color: transparent;
    border: 0.0625rem solid ${props => props.theme.yellow};
    color: ${props => props.theme.white};

    &::placeholder{
        font-weight: 600;
        color: ${props => props.theme.darkGray};
    }
`

export const ButtonCep = styled.button`  
    background-color: ${props => props.theme.yellow};
    border-radius: 4rem;
    padding: 0.6rem;
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 1rem;
    border: none;
    
    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }
`





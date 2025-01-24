import { Link as ReactLink} from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 3.5rem;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.secondBlack};
    height: 100vh;
    width: 100vw;

    @media (min-width: 450px) {
        gap: 8rem;
    }

    @media (max-width: 395px) {
        height: 118vh;
    }

    @media (max-width: 325px) {
        height: 140vh;
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

    @media (min-width: 450px) {
        img{
            width: 12rem;
        }
    }
`

export const Content = styled.div`
    width: 66%;
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
    position: relative;
`
export const IconLock = styled.div`
    position: absolute;
    top: 55%;
    left: 0.5rem;
    transform: translateY(-50%);
`

export const IconEmail = styled.div`
    position: absolute;
    top: 55%;
    left: 0.5rem;
    transform: translateY(-50%);
`

export const Input = styled.input` 
    padding: 0.7rem;
    padding-left: 2.1rem ;
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

export const P = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin-top: 1rem;
    font-weight: 500;
`

export const Link = styled(ReactLink)`  
    text-decoration: none;
    color: ${props => props.theme.yellow} ;
    font-weight: 300;

`


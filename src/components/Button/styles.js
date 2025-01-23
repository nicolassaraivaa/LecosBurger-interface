import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${props => props.theme.yellow};
    border-radius: 2rem;
    padding: 0.7rem;
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    border: none;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }
`


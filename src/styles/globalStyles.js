import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Poppins", serif;
    }

    #root{
        max-width: 1280px;
    }

    p, h3{
        color: ${props => props.theme.white};
    }
`

export default globalStyles
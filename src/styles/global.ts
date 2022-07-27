import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, a:hover, a:focus {
        text-decoration: none;
        color: ${(props) => props.theme["custom-green"]}
    }

    body {
        background: ${(props) => props.theme["gray-800"]};
        color: ${(props) => props.theme["gray-100"]};
    }

    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme["gray-300"]};
    }
`;

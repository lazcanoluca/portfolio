import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 500px;

        --headerHeight: 80px;
    }

    * {
        outline: 2px solid red;
        margin: 0;
        padding: 0;
    }

`;
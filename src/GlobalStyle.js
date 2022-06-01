import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 500px;

        --headerHeight: 80px;
        --goldMain: hsl(51, 64, 52, 1);
        --whiteMain: hsl(120, 100, 100, 1);
        --blackMain: hsl(0, 3, 14, 1);
        --grayMain: hsl(0, 0%, 50%, 100%);
    }

    * {
        outline: 2px solid red;
        margin: 0;
        padding: 0;

        font-family: 'Cedarville Cursive', cursive;
        font-family: 'Piazzolla', serif;

        box-sizing: border-box;
        /* color: var(--whiteMain); */

        h1 {
            /* font-size: 2rem;
            font-weight: 600;
            color: var(--lightMain); */
        }

        h2 {
            /* font-size: 1.5rem; */
            /* font-weight: 600; */
        }

        h3 {
            /* font-size: 1.1rem;
            font-weight: 600; */
        }

        p {
            font-size: 1rem;
        }
    }

`;
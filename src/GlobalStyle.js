import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    :root {
        --maxWidth: 500px;

        --headerHeight: 80px;
        --goldMain: hsl(51, 64%, 52%, 100%);
        --goldTrans: hsl(51, 64%, 52%, 50%);
        --whiteMain: hsl(120, 100%, 100%, 100%);
        --blackMain: hsl(0, 3%, 14%, 100%);
        --grayMain: hsl(0, 0%, 50%, 100%);
        --grayTransMid: hsl(0, 0%, 50%, 75%);
        --grayTrans: hsl(0, 0%, 50%, 50%);

        --darkGrayMain: hsl(0, 0%, 25%, 100%);
        --lightGrayMain: hsl(0, 0%, 85%, 100%);

        --blackOpacity: rgba(0, 0, 0, 50%);

        --greenMain: hsl(99, 100%, 42%, 100%);

        --circleRadius: 130px;
        --stroke: 20px;
        --circleHW: calc( 2*var(--circleRadius) + var(--stroke));

        --heightLine: 100px;
        --heightLineTotal: calc( var(--heightLine) + 2*var(--stroke));
    }

    * {
        /* outline: 1.5px solid red; */
        margin: 0;
        padding: 0;

        font-family: 'Cedarville Cursive', cursive;
        font-family: 'Piazzolla', serif;
        /* font-family: 'Big Noodle';
        font-family: 'Planet Estyle'; */
        
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

    body {
        overflow-x: hidden;
    }

`;
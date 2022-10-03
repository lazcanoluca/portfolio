import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;

    @media (min-width: 920px) {
        flex-direction: row;
    }

    padding: 0;
    background: var(--lightGrayMain);
`;

export const Title = styled.div`

    height: 110vh;

    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blackMain);

    h1 {
        color: var(--greenMain);
        font-family: 'Big Noodle';
        font-size: 6em;
    }

    @media (min-width: 920px) {
        width: calc(.17*100vw);
        padding: 0;
        
        .relleno {
            height: 100%;
            width: 100%;
            width: calc(.17*100vw);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        h1 {
            font-size: calc(.25*100vh);
            white-space: nowrap;
        }

        .title-wrapper {
            position: absolute;
            height: 100vh;
            width: calc(.17*100vw);

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .top {
            position: absolute;
            top: 0;
        }

        .bottom {
            position: absolute;
            bottom: 0;
        }

        .stick {
            position: fixed;
            top: 0;
        }

        .wrapper-wrapper {
            transform: rotate(-90deg);

        }

        .sentinel {
            position: absolute;
            height: 2px;
            width: 100%;
            border: 2px solid magenta;
            visibility: hidden;
        }

        .sentinel-0 { top: 0; }
        .sentinel-1 { top: 100vh; border-color: cyan;}
        .sentinel-2 { bottom: 0; border-color: green}
        .sentinel-3 { bottom: 100vh; border-color: blue}
    }

`;

export const Content = styled.div`
    padding: 2em;
    flex-grow: 1;
    /* height: 200vh; */

    div {
        margin-bottom: 2em;
    }

    h2 {
        font-family: 'Big Noodle';
        font-size: 2em;
    }

    .languages,
    .techs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }

    .tech {
        display: flex;
        margin: 1em;
        min-width: 310px;
    }

    /* img {
        flex-grow: 1;
    } */

    .description {
        display: flex;
        align-items: center;
        margin-left: 1rem;
        /* flex-shrink: 1; */

        h2 {
            /* margin-bottom: .75rem; */
            font-family: 'Big Noodle';
            font-size: 3.5em;
        }

        p {
            font-family: 'Courier Prime';
            color: var(--darkGrayMain);
            font-size: 1.3rem;
        }
    }

    img {
        width: 100px;
    }

    ul {
        margin-left: 2em;
    }

    li {
        list-style: none;
        margin: .5em;
    }

    /* a {
        font-family: 'Big Noodle';
        font-size: 1.5em;
    } */
`;


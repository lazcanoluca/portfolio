import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0;
    background: var(--lightGrayMain);
`;

export const Title = styled.div`
    width: calc(.17*100vw);
    padding: 0;
    background: var(--blackMain);

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    
    .relleno {
        height: 100%;
        width: 100%;
        width: calc(.17*100vw);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: var(--greenMain);
        font-family: 'Big Noodle';
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

`;

export const Content = styled.div`
    padding: 3rem;
    flex-grow: 1;
    /* height: 200vh; */

    .tech {
        display: flex;
        margin-bottom: 4rem;
    }

    .description {
        margin-left: 1rem;
        flex-grow: 1;

        h2 {
            margin-bottom: .75rem;
            font-family: 'Big Noodle';
            font-size: 3.5rem;
        }

        p {
            font-family: 'Courier Prime';
            color: var(--darkGrayMain);
            font-size: 1.3rem;
        }
    }

    img {
        width: 150px;
    }
`;


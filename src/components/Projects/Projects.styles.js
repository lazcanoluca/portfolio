import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;  /* padding: 20px; */
    /* align-items: stretch; */
    padding: 0;
    background: var(--lightGrayMain);
`;

export const Title = styled.div`
    /* display: inline-block; */
    /* position: absolute; */
    /* height: 100vh; */
    /* height: 100%; */
    /* min-height: 500px; */
    width: calc(.17*100vw);
    padding: 0;
    /* top: 0; */
    /* left: 100vw; */
    background: var(--blackMain);

    position: relative;

    display: flex;
    justify-content: center;
    /* align-items: center; */
    align-items: center;
    
    .relleno {
        /* border: 2px solid blue; */
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
        /* height: 100vh; */
        /* width: 100%;
        height: 100%; */
        /* letter-spacing: .7rem; */

        /* transform-origin: top left;
        transform: rotate(90deg); */
        /* position: relative;
        left: calc(.17*100vw);
        height: calc(.17*100vw);
        width: 100vh;
        margin: 0 auto; */
        /* width: 0rem; */
        /* top: 12rem; */
    }
    /* margin-bottom: 15px; */

    .title-wrapper {
        position: absolute;
        /* top: 0; */
        /* border: 2px solid cyan; */
        height: 100vh;
        width: calc(.17*100vw);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top {
        position: absolute;
        /* h1 {
            color: orange;
        } */
        top: 0;
    }

    .bottom {
        position: absolute;
        /* h1 {
            color: magenta;
        } */
        bottom: 0;
    }

    .stick {
        position: fixed;
        /* h1 {
            color: cyan;
        } */
        top: 0;
    }

    .wrapper-wrapper {
        /* border: 1px solid cyan; */

        /* transform-origin: top left; */
        transform: rotate(90deg);

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
    /* background: blue; */
`;

export const Grid = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(7, 150px);
    /* grid-template-rows: 150px; */
    grid-gap: .5rem;

    
    .project_0 {
        grid-area: featured0; 
    }
    
    .project_1 {
        /* grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>; */
        grid-area: featured1;
    }
    
    .project_2 {
        grid-area: featured2;
    }
    
    .project_3 {
        grid-area: featured3;
    }

    .project_4 {
        grid-area: featured4;
    }

    .project_5 {
        grid-area: featured5;
    }

    .project_6 {
        grid-area: featured6;
    }

    grid-template-areas:
        "featured0 featured0 featured1"
        "featured0 featured0 featured1"
        "featured0 featured0 featured1"
        "featured2 featured3 featured3"
        "featured2 featured3 featured3"
        "featured4 featured5 featured6"
        "featured4 featured5 featured6";

`;

export const Thumb = styled.div`
    background-image: url(${({ image }) => image});
    background-size: cover;
    /* padding: 4rem 1rem 0 1rem; */
    border-radius: .25rem;

    display: flex;
    flex-direction: column;

    .relleno {
        /* height: 100%; */
        flex-grow: 1;
    }

    .descripcion {
        height: 3rem;
        overflow: hidden;
    }

   /* .buttons {
       display: flex;
       justify-content: flex-end;
    } */
`;

export const Buttons = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`;
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;  /* padding: 20px; */
    padding: 0;
    background: var(--lightGrayMain);
`;

export const Title = styled.div`
    /* display: inline-block; */
    /* position: absolute; */
    height: 100vh;
    width: 15rem;
    padding: 0;
    /* top: 0; */
    /* left: 100vw; */
    background: var(--blackMain);

    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: var(--greenMain);
        font-family: 'Big Noodle';
        font-size: 10rem;
        white-space: nowrap;
        /* width: 100%;
        height: 100%; */
        /* letter-spacing: .7rem; */

        /* transform-origin: top left; */
        transform: rotate(90deg);
    }
    /* margin-bottom: 15px; */
`;

export const Content = styled.div`
    padding: 3rem;
    flex-grow: 1;
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
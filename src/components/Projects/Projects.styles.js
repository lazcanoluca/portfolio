import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;  /* padding: 20px; */
    padding: 0;
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
        font-size: 11rem;
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
    /* order: -1; */
    /* width: calc( 100vw - 15rem); */
    /* display: inline-block; */
    flex-grow: 1;

`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
`;

export const Thumb = styled.div`
    background-size: cover;
    background-image: url(${({ image }) => image});
    padding: 4rem 1rem 0 1rem;
    border-radius: 1rem;
    div {
        /* margin: 1rem; */
    }
    .descripcion {
        height: 3rem;
        overflow: hidden;
    }
`;

export const Buttons = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
`;
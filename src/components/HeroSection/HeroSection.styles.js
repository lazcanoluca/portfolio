import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    /* background-color: var(--blackOpacity);
    background-image: url(${({ image }) => image}); */
    /* background: var(--blackOpacity), url(${({ image }) => image}); */
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, .65) 30%,
        rgba(0, 0, 0, .65) 100%
        ), url(${({ image }) => image});
    /* background- */
    background-size: cover;
    overflow-y: hidden;
/* 
    position: relative;
    perspective: 10px;
    /* overflow-x: hidden; */
    /* overflow-y: auto; */
    /* overflow: hidden;
    transform-style: preserve-3d;
    z-index: -1; */
/*  */
    /* .background {
        transform: translateZ(-10px) scale(2);

        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    } */ */

`;

export const Header = styled.div`

    position: absolute;
    /* top: calc( var(--circleHW)/2 ); */

`;

export const Circulo = styled.div`

    position: absolute;

    /* top: calc( 50vh - var(--circleHW)/2 ); */
    left: calc( 27vw - var(--circleHW)/2 );

    svg {
        height: var(--circleHW);
        width: var(--circleHW);
    }

    circle {
        cx: calc( var(--circleHW)/2 );
        cy: calc( var(--circleHW)/2 );
        r: var(--circleRadius);
        fill: var(--whiteMain);
        stroke: var(--greenMain);
        stroke-width: var(--stroke);
    }
`;

export const Rectangulos = styled.div`

    position: absolute;
    top: calc( var(--circleHW)/2 - var(--heightLineTotal)/2 );

    svg {
        width: 100vw;
        position: absolute;
    }

    .fondo {
        height: var(--heightLineTotal);
    }

    .top {
        height: var(--heightLine);
        top: var(--stroke);
    }
    
    .rect-fondo {
        width: 100vw;
        height: var(--heightLineTotal);
        fill: var(--greenMain);
    }
    
    .rect-top {
        width: 100vw;
        height: var(--heightLine);
        fill: var(--whiteMain);
        top: 20px;
    }
`;

export const SVG = styled.div``;

export const CentralBar = styled.div`
    position: absolute;
    top: calc( 50vh - var(--circleHW)/2 );
    max-width: 100%;
    /* overflow: hidden; */
`;

export const Name = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: calc( 27vw - var(--circleHW)/2);
    /* bottom: calc(var(--circleHW)); */
    width: var(--circleHW);
    height: var(--circleHW);

    user-select: none;
    
    h1 {
        font-family: 'Big Noodle';
        font-size: 7rem;
    }

    h2 {
        font-family: 'Planet Estyle';
        font-size: 2rem;
    }
`;

export const Navigation = styled.div`
    position: absolute;
    height: var(--heightLineTotal);
    display: flex;
    width: 100%;
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: space-between; */
    top: calc( var(--heightLineTotal)/2 );
    left: calc( 27vw + var(--circleHW)/2);
    width: calc( 100vw - (27vw + var(--circleHW)/2));

    ul {
        width:100%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
        /* margin: 20px 0 20px 0; */
        min-width: 70px;

        font-family: 'Planet Estyle';
        font-size: 1.7rem;

        user-select: none;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Config = styled.div``;

export const Social = styled.div`
    ul {
        list-style: none;
        display: flex;
    }

    li {
        color: var(--greenMain);
        display: flex;
        align-items: center;
        margin: 15px 10px 15px 10px;
        padding: 10px;
    }
`;

export const Language = styled.div``;

export const Mode = styled.div``;

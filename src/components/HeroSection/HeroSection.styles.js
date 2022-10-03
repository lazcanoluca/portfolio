import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    /* background-color: var(--blackOpacity);
    /* background-image: url(${({ image }) => image}); */
    /* background: var(--blackOpacity), url(${({ image }) => image}); */
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, .2) 30%,
        rgba(0, 0, 0, .2) 100%
        ), url(${({ image }) => image});
    /* background- */
    background-size: cover;
    background-position: bottom;
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
    left: calc( 50vw - var(--circleHW)/2 );

    @media (min-width: 670px) {
        left: calc( 20vw - var(--circleHW)/2 );
    }

    @media (min-width: 920px) {
        left: calc( 27vw - var(--circleHW)/2);
    }

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

    @media (max-width: 670px) {
        visibility: hidden;
    }

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
    max-width: 100%;

    top: calc( 35vh - var(--circleHW)/2 );

    @media (min-width: 670px) {
        top: calc( 50vh - var(--circleHW)/2 );
    }

    /* overflow: hidden; */
`;

export const Name = styled.div`

    position: absolute;
    left: calc( 50vw - var(--circleHW)/2); /* center */
    width: var(--circleHW);
    height: var(--circleHW);
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (min-width: 670px) {
        left: calc( 20vw - var(--circleHW)/2 );
    }
    
    @media (min-width: 920px) {
        left: calc( 27vw - var(--circleHW)/2);
    }

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

    display: flex;
    /* flex-direction: column; */

    /* width: calc( 100vw - (27vw + var(--circleHW)/2)); */
    position: absolute;
    height: var(--heightLineTotal);
    /* width: 100%; */

    
    /* display: flex; */
    align-items: center;
    justify-content: center;
    
    top: calc( var(--heightLineTotal)/2 + var(--circleHW) + 2*var(--stroke));
    left: calc( 50vw - 105px/2);

    @media (min-width: 670px) {
        padding-right: 20px;
        top: calc( var(--heightLineTotal)/2 );
        left: calc( 20vw + var(--circleHW)/2);
            width: calc( 100vw - (20vw + var(--circleHW)/2));
    }

    @media (min-width: 920px) {
        left: calc( 27vw + var(--circleHW)/2);
        width: calc( 100vw - (27vw + var(--circleHW)/2));
    }

    ul {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;

        @media (min-width: 670px) {
            flex-direction: row;
        }

    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: .5em;
        /* margin: 20px 0 20px 0; */
        min-width: 70px;

        margin-bottom: 5px;
        margin-top: 5px;

        
        @media (max-width: 670px) {
            border-left: solid 10px var(--greenMain);
        }

        font-family: 'Planet Estyle';
        font-size: 1.7rem;

        user-select: none;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }

        background: var(--whiteMain);

        /* text: nowrap; */
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
        a {
            color: var(--greenMain);
        }
        display: flex;
        align-items: center;
        margin: 15px 10px 15px 10px;
        padding: 10px;

        :hover {
            cursor: pointer;
        }

        /* a:link,
        a:visited,
        a:hover,
        a:active
        {
            color: white;
        } */
    }
`;

export const Language = styled.div``;

export const Mode = styled.div``;

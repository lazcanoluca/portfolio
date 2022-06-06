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
    background-size: cover;
`;

export const TopBar = styled.div``;

export const Header = styled.div``;

export const Circulo = styled.div`

    position: absolute;
    top: calc( 50vh - var(--circleHW)/2 );
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
    top: calc( 50vh - var(--heightLineTotal)/2 );

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

export const CentralBar = styled.div``;

export const Name = styled.div``;

export const Navigation = styled.div``;
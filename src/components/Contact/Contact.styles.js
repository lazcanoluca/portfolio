import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;  /* padding: 20px; */
    padding: 0;
    background: var(--darkGrayMain);
`;

export const Content = styled.div`
    padding: 3rem;
    flex-grow: 1;
`;

export const Title = styled.div`
    /* display: inline-block; */
    /* position: absolute; */
    height: 100vh;
    width: 13rem;
    width: calc(.17*100vw);
    padding: 0;
    /* top: 0; */
    /* left: 100vw; */
    background: var(--greenMain);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        /* max-height: 100%; */
        /* max-width: 100%; */
        color: var(--blackMain);
        font-family: 'Big Noodle';
        font-size: calc(.25*100vh);
        white-space: nowrap;
        /* width: 100%;
        height: 100%; */
        /* letter-spacing: .7rem; */

        /* transform-origin: top left; */
        transform: rotate(-90deg);
    }
    /* margin-bottom: 15px; */
`;

export const MessageForm = styled.div``;

export const Mail = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .phone, .mail {
        font-family: 'Planet Estyle';
        font-size: 4rem;
        color: var(--greenMain);
        user-select: none;
        text-shadow: 2px 2px black;
        :hover {
            text-shadow: 4px 4px black;
            cursor: pointer;
        }
    }
`;

export const Message = styled.div`
    display: flex;
    justify-content: space-around;
`;
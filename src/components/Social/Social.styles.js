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
    /* min-height: 500px; */
    width: calc(.17*100vw);
    padding: 0;
    /* top: 0; */
    /* left: 100vw; */
    background: var(--blackMain);

    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: var(--lightGrayMain);
        font-family: 'Big Noodle';
        font-size: calc(.25*100vh);
        white-space: nowrap;
        /* width: 100%;
        height: 100%; */
        /* letter-spacing: .7rem; */

        /* transform-origin: top left; */
        transform: rotate(90deg);
        text-shadow: 5px -5px var(--greenMain);
    }
    /* margin-bottom: 15px; */
`;

export const Content = styled.div`
    padding: 3rem;
    flex-grow: 1;
`;

export const SocialList = styled.div`
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }
    li {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }
    p {
        margin-left: 10px;
    }
`;
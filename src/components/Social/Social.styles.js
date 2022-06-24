import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;  /* padding: 20px; */
    padding: 0;
    background: var(--lightGrayMain);
    /* background: var(--greenMain); */
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

    height: 100%;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul {
        flex-grow: 1;
        display: flex;
        height: 100%;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        align-content: stretch;
        flex-wrap: wrap;
    }

    li > a {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        /* color: white; */
        /* a {
            color: var(--greenMain);
        } */
        text-decoration: none;
    }

    a:link,
        a:visited,
        a:hover,
        a:active {
            color: var(--blackMain);
        }

    li:hover {
        cursor: pointer;
    }

    p {
        margin-left: 30px;
        font-size: 5rem;
        font-family: 'Big Noodle';
        user-select: none;
    }

`;
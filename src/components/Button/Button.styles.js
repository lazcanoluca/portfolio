import styled from "styled-components";

export const Wrapper = styled.button`
    width: 7rem;
    height: 2.2rem;
    border-radius: 1.1rem;
    border: 2px solid var(--blackMain);
    background-color: var(--grayTrans);

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
        background-color: var(--grayTransMid);
    }

    .icon {
        margin-left: .3rem;
        /* padding-top: .1rem; */
        font-size: 1.5rem;
    }


`;

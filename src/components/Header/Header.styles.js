import styled from "styled-components";

export const Wrapper = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    height: var(--headerHeight);
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    /* max-width: var(--maxWidth); */
`;

export const Navigation = styled.div`
    display: flex;
    /* align-items: center; */
    ul {
        list-style: none;
        display: flex;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin: 20px 0 20px 0;
        min-width: 70px;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        display: flex;
        justify-content: center;
        font-size: 2.3rem;
        width: 100%;
    }

    h2 {
        font-size: 1.1rem;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    /* align-items: center; */
    ul {
        list-style: none;
        display: flex;
    }

    li {
        display: flex;
        align-items: center;
        margin: 15px 10px 15px 10px;
        padding: 10px;
    }
`;
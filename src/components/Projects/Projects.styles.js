import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Title = styled.div`
    margin-bottom: 15px;
`;

export const Content = styled.div``;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
`;

export const Thumb = styled.div`
    background-size: cover;
    background-image: url(${({ image }) => image});
    padding: 8rem 0 0;
    border-radius: 1rem;
    div {
        margin: 1rem;
    }
`;
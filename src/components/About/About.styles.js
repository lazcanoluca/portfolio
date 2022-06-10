import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--blackMain);
`;

export const Content = styled.div`
    p {
        color: var(--greenMain);
        font-family: 'Courier Prime';
        font-size: 1.5rem;
        padding: 1.5rem;
        line-height: 2rem;
    }

    .text {
        padding: 5rem 10rem;
    }
`;

export const Title = styled.div`
    display: flex;

    .dummy {
        flex-grow: 1;
    }


    h1 {
        padding-right: 15rem;
        padding-left: 2rem;
        color: var(--blackMain);
        font-family: 'Big Noodle';
        font-size: calc(.25*100vh);
        /* font-size: calc(1*100vh); */
        white-space: nowrap;
        background: var(--lightGrayMain);
        text-shadow: 5px 5px var(--grayMain),
                     10px 10px var(--greenMain);
        /* text-shadow: 10px 25px DarkMagenta,
                     20px 35px blue,
                     30px 45px cyan,
                     40px 55px LimeGreen,
                     50px 65px yellow,
                     60px 75px blue,
                     70px 85px orange,
                     80px 95px red; */
    }
`;
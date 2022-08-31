import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 920px) {
        flex-direction: row;
    }

    padding: 0;
    background: var(--lightGrayMain);
`;

export const Title = styled.div`

    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blackMain);

    h1 {
        color: var(--greenMain);
        font-family: 'Big Noodle';
        font-size: 6em;
    }

    @media (min-width: 920px) {

        width: calc(.17*100vw);
        padding: 0;
        
        .relleno {
            height: 100%;
            width: 100%;
            width: calc(.17*100vw);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        h1 {
            font-size: calc(.25*100vh);
            white-space: nowrap;
        }
    
        .title-wrapper {
            position: absolute;
            height: 100vh;
            width: calc(.17*100vw);
    
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        .top {
            position: absolute;
            top: 0;
        }
    
        .bottom {
            position: absolute;
            bottom: 0;
        }
    
        .stick {
            position: fixed;
            top: 0;
        }
    
        .wrapper-wrapper {
            transform: rotate(90deg);
        }
    
        .sentinel {
            position: absolute;
            height: 2px;
            width: 100%;
            border: 2px solid magenta;
            visibility: hidden;
        }
    
        .sentinel-0 { top: 0; }
        .sentinel-1 { top: 100vh; border-color: cyan;}
        .sentinel-2 { bottom: 0; border-color: green}
        .sentinel-3 { bottom: 100vh; border-color: blue}
    }


`;

export const Content = styled.div`
    padding: 2em;

    /* @media (min-width: 720px) {
        3rem;
    } */

    flex-grow: 1;
`;

export const Grid = styled.div`


    display: grid;
    grid-template-columns: minmax(100px, 1fr);
    grid-template-rows: repeat(7, 400px);
    grid-gap: 1em;

    .project_0 {
            .descripcion {
                height: 5rem !important;
            }
            h3 {
                font-size: 4rem;
                max-width: 10rem;
            }
        }
        
        .project_1 {
            .descripcion {
                height: 5rem !important;
            }
            h3 {
                font-size: 4rem;
                max-width: 10rem;
            }
        }

    @media (min-width: 720px) {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        grid-template-rows: repeat(7, 150px);
        grid-gap: .5rem;

        .project_0 {
            grid-area: featured0;
        }
        
        .project_1 {
            grid-area: featured1;
        }
        
        .project_2 {
            grid-area: featured2;
        }
        
        .project_3 {
            grid-area: featured3;
        }

        .project_4 {
            grid-area: featured4;
        }

        .project_5 {
            grid-area: featured5;
        }

        .project_6 {
            grid-area: featured6;
        }

        grid-template-areas:
            "featured0 featured0 featured1"
            "featured0 featured0 featured1"
            "featured0 featured0 featured1"
            "featured2 featured3 featured3"
            "featured2 featured3 featured3"
            "featured4 featured5 featured6"
            "featured4 featured5 featured6";
    }

`;

export const Thumb = styled.div`
    background-image: url(${({ image }) => image});
    background-position: center;
    background-size: cover;
    /* padding: 4rem 1rem 0 1rem; */
    border-radius: .25rem;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    .stack {
        display: flex;

        ul {
            padding-right: .5rem;
            flex-grow: 0;
            background: var(--grayTransMid);
            border-radius: 0 0 2rem 0;
        }
        
        .icon {
                width: 2rem;
                margin: .3rem .5rem;
            }
    }
    
    .bottom {
        padding: 2rem 1rem 1rem 1rem;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, .65) min(7rem, 40%),
            rgba(0, 0, 0, 0) min(12rem, 75%)
        );
    }

    .relleno {
        /* height: 100%; */
        flex-grow: 1;
    }

    h3 {
        color: var(--greenMain);
        font-family: 'Big Noodle';
        font-size: 3rem;
        text-shadow: 3px 3px var(--blackMain);
    }

    .descripcion {
        display: flex;
        align-items: center;
        margin: auto;
        height: 3rem;
        overflow: hidden;
        color: var(--lightGrayMain);
        font-family: 'Courier Prime';
    }

`;

export const Buttons = styled.div`
    /* padding: 1rem; */
    padding-top: .5rem;
    display: flex;
    justify-content: space-evenly;

`;
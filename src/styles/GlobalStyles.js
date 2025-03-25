import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, html, #root {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #333333;
        background-color: #FFFFFF;
        overflow-x: hidden;
	    overflow-y: auto;

        h1, h2, h3, h4 {
            font-family: "Montserrat", sans-serif;
          color: #333333;
        }

        p {
            font-family: "Poppins", sans-serif;
            color: #333333;
        }
    }
`
export const Paginacao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .3rem;
`
export const TxtPaginacao = styled.span`
    font-size: 1rem;
    font-family: "Poppins", sans-serif;

    @media (max-width: 430px) {
        font-size: .5rem;
    }
`
export const PagBtn = styled.button`
    text-align: center;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    padding: .3rem;
    color: #333333;
    background-color: #EAEAEA;
    border: 1px solid #333333;
    border-radius: 12px;
    width: 7rem;

    &:disabled {
        opacity: .5;
    }

    @media (max-width: 430px) {
        font-size: .5rem;
        width: 4rem;
        padding: .1rem;
    }
`
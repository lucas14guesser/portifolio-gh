import { createGlobalStyle } from "styled-components";

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
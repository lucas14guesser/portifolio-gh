import{d as i,j as e}from"./styled-components.browser.esm-BNWIvhS-.js";const d=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 40rem;
    gap: 3rem;

    @media (max-width: 430px) {
        margin: 7rem 3rem 7rem 1rem;
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        margin: 7rem 3rem 7rem 1rem;
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        margin: 7rem 3rem 7rem 1rem;
        gap: 1rem;
    }
`,r=i.h1`
    text-align: center;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: 1.1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 1.5rem;
    }
`,n=i.form`
    display: flex;
    flex-direction: column;
    background: #EAEAEA;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    gap: 2rem;

    @media (max-width: 430px) {
        width: 100%;
        padding: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 100%;
        padding: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 100%;
        padding: 1rem;
    }
`,m=i.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
`,t=i.input`
    width: 10rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #333333;
    background: #EAEAEA;
    outline: none;
    padding: .5rem 0;
    font-family: "Poppins", sans-serif;

    &::placeholder {
        color: #333333;
    }

    @media (max-width: 430px) {
        &::placeholder {
            font-size: .5rem;
        }
    }

    @media (min-width: 431px) and (max-width: 600px) {
        &::placeholder {
            font-size: .8rem;
        }
    }

    @media (min-width: 601px) and (max-width: 800px) {
        &::placeholder {
            font-size: 1rem;
        }
    }
`,a=i.textarea`
    width: 10rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #333333;
    background: #EAEAEA;
    outline: none;
    padding: .5rem 0;
    font-family: "Poppins", sans-serif;

    &::placeholder {
        color: #333333;
    }

    @media (max-width: 430px) {
        &::placeholder {
            font-size: .5rem;
        }

    @media (min-width: 431px) and (max-width: 600px) {
        &::placeholder {
            font-size: .8rem;
        }
    }

    @media (min-width: 601px) and (max-width: 800px) {
        &::placeholder {
            font-size: 1rem;
        }
    }
`,o=i.button`
    width: 7rem;
    text-transform: uppercase;
    border: 1px solid #333333;
    background: #EAEAEA;
    padding: .5rem;
    border-radius: 12px;
    cursor: pointer;

    @media (max-width: 430px) {
        font-size: .5rem;
        width: 4rem;
        padding: .3rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
        width: 6rem;
        padding: .5rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
        width: 7rem;
        padding: .5rem;
    }
`;function x(){return e.jsxs(d,{children:[e.jsx(r,{children:"Contato"}),e.jsxs(n,{action:"mailto:guilherme7hs@gmail.com",method:"post",enctype:"text/plain",children:[e.jsxs(m,{children:[e.jsx(t,{type:"text",placeholder:"NOME",required:!0,style:{width:"50%"}}),e.jsx(t,{type:"text",placeholder:"SOBRENOME",style:{width:"50%"}})]}),e.jsx(t,{type:"email",placeholder:"E-MAIL",required:!0,style:{width:"100%"}}),e.jsx(t,{type:"text",placeholder:"ASSUNTO",style:{width:"100%"}}),e.jsx(a,{name:"Mensagem",id:"msg",placeholder:"MENSAGEM",rows:"10",cols:"50",required:!0,style:{width:"100%"}}),e.jsx(o,{type:"submit",children:"Enviar"})]})]})}export{x as C};

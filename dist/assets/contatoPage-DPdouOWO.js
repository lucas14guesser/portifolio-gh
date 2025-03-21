import{d as t,j as e}from"./styled-components.browser.esm-BNWIvhS-.js";const o=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 40rem;
    gap: 3rem;
`,n=t.h1`
    text-align: center;
`,i=t.form`
    display: flex;
    flex-direction: column;
    background: #EAEAEA;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    gap: 2rem;
`,d=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
`,r=t.input`
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
`,a=t.textarea`
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
`,s=t.button`
    width: 7rem;
    text-transform: uppercase;
    border: 1px solid #333333;
    background: #EAEAEA;
    padding: .5rem;
    border-radius: 12px;
    cursor: pointer;
`;function c(){return e.jsxs(o,{children:[e.jsx(n,{children:"Contato"}),e.jsxs(i,{action:"mailto:guilherme7hs@gmail.com",method:"post",enctype:"text/plain",children:[e.jsxs(d,{children:[e.jsx(r,{type:"text",placeholder:"NOME",required:!0,style:{width:"50%"}}),e.jsx(r,{type:"text",placeholder:"SOBRENOME",style:{width:"50%"}})]}),e.jsx(r,{type:"email",placeholder:"E-MAIL",required:!0,style:{width:"100%"}}),e.jsx(r,{type:"text",placeholder:"ASSUNTO",style:{width:"100%"}}),e.jsx(a,{name:"Mensagem",id:"msg",placeholder:"MENSAGEM",rows:"10",cols:"50",required:!0,style:{width:"100%"}}),e.jsx(s,{type:"submit",children:"Enviar"})]})]})}export{c as C};

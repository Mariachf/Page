import styled from "styled-components";

export const Footer = styled.div`

`;

export const Contatos = styled.div`
    width: 100%;
    height:80vh;
    background-color:#005BD5;
    color:#ffffff;
    display:grid;
    
    
    input{
        font-family: "Noto Sans";
        border:1px solid #ffffff;
        border-radius:20px;
        font-family: "Noto Sans";
        letter-spacing: .1rem;
        
    }
    input:focus::-webkit-input-placeholder {
        color: transparent;
     }
    
    textarea:focus, input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
      }
    .email{
        width: 27%;
        height: 6.7vh;
        padding-left:1rem;
        color:#AFB3B8;
        margin-left:31rem;
        margin-top:-3.4rem;
    }
    .text{
        width: 27%;
        height: 6.7vh;
        padding-left:1rem;
        color:#AFB3B8;
        margin-top:-4.9rem;
        margin-left:31rem;
    }
    .mensg{
        width: 27%;
        height: 15vh;
        padding-left:1rem;
        padding-bottom:2.5rem;
        color:#AFB3B8;
        margin-top:-6.4rem;
        margin-left:31rem;
        
    }
    .Button{
        width: 10%;
        height: 5vh;
        color:#FFFFFF;
        text-transform:uppercase;
        letter-spacing: .1rem;
        background-color: transparent;
        margin-top:-4rem;
        margin-left:38rem;
        cursor:pointer;
    }
`;

export const Sobre = styled.div`
    display:flex;
`;
export const Text = styled.h2`
    color:#ffffff;
    font-size:2.3rem;
    font-family: "Open Sans";
    text-align: center;
    margin-top:5rem;
`;

export const Legenda = styled.p`
    margin-bottom:.6rem;
    font-family: "Noto Sans";
    cursor:pointer;
`;


export const Div = styled.div`
    width: 100%;
    height: 45vh;
    padding-top:3rem;
    padding-left:3rem;
    color:#005BD5;
img{
    width: 13vw;
    height: 5.5vh;
    margin-bottom:1rem;
 }
`;

export const Sub = styled.h3`
    margin-bottom:1rem;
    font-family: "Open Sans";
`;
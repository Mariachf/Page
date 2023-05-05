import styled from "styled-components";
import Backg from "./img/Perua.jpg";

export const Header = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap:2rem;
  height: 9vh;
  background-color: #fffff;
  
    img{
      width: 12vw;
      margin-left: 5rem;
    }

  
`;

export const HeaderList = styled.ul`
  
  width: 25vw;
  display: flex;
  justify-content: space-around;
  margin-left: 33rem;
  cursor:pointer;
  
  
`;

export const MenuItem = styled.li`
  list-style: none;
  font-size: 1.1rem;
  font-family: "Noto Sans";
  text-align:bold;
  color: #005BD5;
  
  
`;

export const BackgroundImg= styled.div`
  width: 100%;
  height: 91vh;  
  background-image: url(${Backg});
  background-repeate: no-repeat;
  background-position:center;
  background-size:cover;
  
  
  h1{
    color:#005BD5;
    font-size:3.2rem;
    width:40%;
    padding-top:20vh;
    padding-left:5rem;
    font-family: "Open Sans";
    text-align:bold;
    
  }

  input{
    border:none;
    width: 20rem;
    height: 5.5vh;
    border-radius:20px;
    display:grid;
    padding-left:2rem;
    margin-left:5rem;
    margin-top:2rem;
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

  button{
    width: 8rem;
    height: 5vh;
    border: none;
    border-radius:20px;
    color:#ffffff;
    background-color:#005BD5;
    margin-left:5rem;
    margin-top:1rem;
    letter-spacing: .1rem;
    cursor:pointer;
}

 
`;

export const Botão = styled.button` 
  width: 11vw;
  height: 6.5vh;
  border: none;
  border-radius:20px;
  color:#ffffff;
  background-color:#005BD5;
 letter-spacing: .1rem;
 cursor:pointer;


`;
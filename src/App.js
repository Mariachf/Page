import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Section/Section"

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <>
     <GlobalStyle />
     <Header />
     <Main />
    <Section />
    <Footer />
    </>
  );
};
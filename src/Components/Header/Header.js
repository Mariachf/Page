import React from "react";
import * as S from "./Header_style";
import Logo from "./img/Logo.jpg";

export default function Header() {
    return(
        <S.Header>
            

        <S.HeaderNav>
        
            <img src={Logo}  alt="Logo Site"/>
         <S.HeaderList>
                <S.MenuItem>Sobre</S.MenuItem>
                <S.MenuItem>Benefícios</S.MenuItem>
                <S.MenuItem>Contato</S.MenuItem>
        </S.HeaderList>
            <S.Botão>AGENDAR</S.Botão>
            
        </S.HeaderNav>
        
        <S.BackgroundImg>
            <h1>Para qual estado você deseja ir?</h1>
            <input type="text" placeholder="Pesquisar"/>
            <button>BUSCAR</button>
        </S.BackgroundImg>
        
            
        </S.Header>
    );
}
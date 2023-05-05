import React from "react";
import * as S from "./Main_style";
import Casal from "./img/Caminho 18@2x.jpg";
import Amigos from "./img/Caminho 38@2x.jpg"; 
import Piscina from "./img/Caminho 39@2x.png"; 
import Rio from "./img/Retângulo 65@2x.jpg";
import Ostras from "./img/Retângulo 66@2x.png";
import Caldas from "./img/Retângulo 67@2x.jpg";
import Amazonia from "./img/Retângulo 68@2x.jpg"; 

export default function Main() {
    return(
        <S.Main>
            <S.Div>
                <img src={Casal}  alt="Casal"/>
                <S.Blue>
                    <div className="linha"></div>
                    <S.Text>Viagens Nacionais</S.Text>
                    <S.Principal>O clima perfeito, no lugar perfeito</S.Principal>
                    <S.Legenda>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos 
                        não tem preço.</S.Legenda>
                    <S.Agendar>Agendar</S.Agendar>
                </S.Blue>
            </S.Div>

            <S.Div>
                
                <S.White>
                    <div className="linha"></div>
                    <S.Text>Viagens Nacionais</S.Text>
                    <S.Principal>Curta uma nova vibe entre amigos</S.Principal>
                    <S.Legenda>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. 
                        Conheça nossos Planos Multi.</S.Legenda>
                    <S.Agendar>Agendar</S.Agendar>
                </S.White>
                    <img src={Amigos}  alt="Piscina"/>
            </S.Div>
                
               

            <S.Div>
                <img src={Piscina}  alt="Piscina"/>
                <S.Piscina>
                    <div className="linha"></div>
                    <S.Text>Viagens Nacionais</S.Text>
                    <S.Principal>Algumas experiências são inexplicáveis</S.Principal>
                    <S.Legenda>Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num 
                        clima sereno, relaxante e natural.</S.Legenda>
                    <S.Agendar>Agendar</S.Agendar>
                </S.Piscina>
            </S.Div>

         <S.Section>
            <S.BackgroundR>
                <img src={Rio}/>
                <button>Rio de Janeiro</button>
            </S.BackgroundR>

            <S.BackgroundO>
                <img src={Ostras}/>
                <button>Rio das Ostras</button>
            </S.BackgroundO>
            <S.BackgroundD>
                <img src={Caldas}/>
                <button>Caldas Novas</button>
            </S.BackgroundD>
            <S.BackgroundT>
                <img src={Amazonia}/>
                <button>Amazônia</button>
            </S.BackgroundT>
               
               
               
               
              

           
           
        </S.Section>

           </S.Main>
    );
   
};
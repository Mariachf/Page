import React from "react";
import * as S from "./Section_style";
import Baby from "./img/Retângulo 197@2x.jpg";
import Galera from "./img/Retângulo 198@2x.jpg";
import Dog from "./img/Retângulo 199@2x.jpg";
import Homem from "./img/Retângulo 200@2x.jpg";
import Mulher from "./img/Retângulo 201@2x.jpg";
import Pessoas from "./img/Retângulo 202@2x.jpg";
import Caminho from "./img/Grupo_308_2x-removebg-preview.png";
import Paisagem from "./img/Grupo 305@2x.png"
import Coco from "./img/Caminho_240_2x-removebg-preview.png";
import Cardapio from "./img/Grupo 463@2x.png";


export default function Section() {
    return(
        <S.Section>
            <S.Text>use a hashtag #brasilisverigudi</S.Text>
            <S.Legenda>Nosso mural de Experiências</S.Legenda>

            <S.Div>
                <img src={Baby}/>
                <img src={Galera}/>
                <img src={Dog}/>
                <img src={Homem}/>
                <img src={Mulher}/>
                <img src={Pessoas}/>
            </S.Div>

            <S.Post>
                <S.Container>
                    <img src={Caminho}/>
                    <p>O melhor do Brasil</p>
                </S.Container>
                <S.ContainerOne>
                    <img src={Paisagem}/>
                    <p>Cidades mais frequentadas</p>
                </S.ContainerOne>
                <S.ContainerDou>
                    <img src={Coco}/>
                    <p>Pontos turísticos</p>
                </S.ContainerDou>
                <S.ContainerTer>
                    <img src={Cardapio}/>
                    <p>Restaurantes</p>
                </S.ContainerTer>
            </S.Post>

        </S.Section>
    );
}
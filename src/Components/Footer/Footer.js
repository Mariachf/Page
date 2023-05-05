import * as S from "./Footer_style";
import Logo from "./img/Logo.jpg"

export default function Footer() {
    return(
      <S.Footer>
          <S.Contatos>
              <S.Text>Fale conosco</S.Text>
              <input type="email" placeholder="Diga o seu melhor email" className="email"></input>
              <input type="Text" placeholder="Assunto" className="text"></input>
              <input type="Text" placeholder="Escreva a sua mensagem" className="mensg" cols="50" rows="10" ></input>
              <input type="submit" placeholder="Enviar"  className="Button" />
            </S.Contatos>

          <S.Sobre>
            <S.Div>
              <img src={Logo}/>
              <S.Legenda>Sobre nós </S.Legenda>
              <S.Legenda>Mural de memórias</S.Legenda>
              <S.Legenda>Eventos Gudi </S.Legenda>
              <S.Legenda>Nosso blog</S.Legenda>
            </S.Div>

            <S.Div>
            <S.Sub>Contato</S.Sub>
              <S.Legenda>Chat Virtual</S.Legenda>
              <S.Legenda>SAC Online </S.Legenda>
              <S.Legenda>Ouvidoria </S.Legenda>
              <S.Legenda>FAQ</S.Legenda>
            </S.Div>

            <S.Div>
            <S.Sub>Benefícios</S.Sub>
              <S.Legenda>Conta digital Gudi</S.Legenda>
              <S.Legenda>Viaje com Milhas</S.Legenda>
              <S.Legenda>C6 Átomos </S.Legenda>
              <S.Legenda>iD Jovem7</S.Legenda>
            </S.Div>

            <S.Div>
            <S.Sub>Lugares</S.Sub>
              <S.Legenda>O melhor do Brasil</S.Legenda>
              <S.Legenda>Cidades frequentes</S.Legenda>
              <S.Legenda>Pontos turísticos</S.Legenda>
              <S.Legenda>Restaurantes</S.Legenda>
            </S.Div>

            <S.Div>
              <S.Sub>Curiosidades</S.Sub>
              <S.Legenda>Cultura e tradições </S.Legenda>
              <S.Legenda>Pratos típicos </S.Legenda>
              <S.Legenda>Mitos brasileiros</S.Legenda>
              <S.Legenda>Carnaval</S.Legenda>
            </S.Div>
          </S.Sobre>
      </S.Footer>  
    );
}
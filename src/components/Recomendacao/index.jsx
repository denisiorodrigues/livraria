import styled from "styled-components"

import Card from "../Card"
import Titulo from "../Titulo"

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const Descricao = styled.p`
    max-width: 300px;
    color: #000;
`
const Imagem = styled.img`
    width: 150px;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

function Recomendacoes({titulo, subtitulo, descricao, img}) {
    console.log(titulo, subtitulo, descricao, img)
    return (
        <Card>
            <div>
                <Titulo 
                    cor="#EB9B00"
                    tamanhoFonte="22px"
                    alinhamentoTexto = "left"
                >{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <Imagem src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default Recomendacoes
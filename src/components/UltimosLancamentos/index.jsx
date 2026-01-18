import styled from "styled-components";

import Titulo from "../Titulo";

import { livros } from "../Pesquisa/dadosPesquisa"; 

const Conteudo = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const ConteudoDosLIvros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <Conteudo>
            <Titulo
                cor="#000"
                tamanhoDaFonte = "18px"
                alinhamentoDaFonte = "left"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <ConteudoDosLIvros>
                { livros.map(livro => (
                    <img key={livro.id} src={livro.src} alt="Imagem do livro" />
                ))}
            </ConteudoDosLIvros>
        </Conteudo>
    )
}

export default UltimosLancamentos;
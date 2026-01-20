import styled from "styled-components";

import Titulo from "../Titulo";
import Recomendacao from "../Recomendacao"

import { livros } from "./dadosUltimosLancamentos"; 
import { livrosRecomendados } from "./dadosLivrosRecomendados"; 

const Conteudo = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const ConteudoDosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const ConteudoRecomendacoes = styled.div`
     display: flex;
    flex-direction: column;
    gap: 10px;  
`

function UltimosLancamentos() {
    return (
        <Conteudo>
            <Titulo
                cor="#388f44ff"
                tamanhoFonte = "36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <ConteudoDosLivros>
                { livros.map(livro => (
                    <img key={livro.id} src={livro.src} alt="Imagem do livro" />
                ))}
            </ConteudoDosLivros>
            <Titulo tamanhoFonte="36px">Talvez você se interesse por</Titulo>
            <ConteudoRecomendacoes>
                { livrosRecomendados.map(livro => (
                    <Recomendacao key={livro.id}
                        titulo={livro.titulo}
                        subtitulo={livro.subtitulo}
                        descricao={livro.descricao}
                        img ={livro.src}/>
                ))}
            
            </ConteudoRecomendacoes>
        </Conteudo>
    )
}

export default UltimosLancamentos;
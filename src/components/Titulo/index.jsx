import styled from "styled-components"

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#EB9B00'};
    font-size: ${props => props.tamanhoDaFonte || '36px'};
    text-align: ${props => props.alinhamentoDoTexto || 'center'};
    margin: 0;
`

export default Titulo
import styled from 'styled-components';

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const opcoesDeMenu = ['Inicio', 'Categorias', 'Minha Estante', 'Favoritos']

function OpcoesHeader() {
    return (
        <Opcoes>
            {opcoesDeMenu.map((opcao) => (
                <Opcao key={opcao}><p>{opcao}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;
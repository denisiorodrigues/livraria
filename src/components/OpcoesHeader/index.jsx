import './style.css'

const opcoesDeMenu = ['Inicio', 'Categorias', 'Minha Estante', 'Favoritos']

function OpcoesHeader() {
    return (
        <ul className='opcoes-menu'>
            { opcoesDeMenu.map((opcao) => (
              <li className='opcao' key={opcao}><p>{opcao}</p></li>
            )) }
        </ul>
    )
}

export default OpcoesHeader;
import './estilo.css'
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img className='logo-img' src={logo} alt="logomarca do site" />
            <p><strong>Livraria </strong> Três Irmãos</p>
        </div>
    )
}

export default Logo
import './estilo.css'
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="logomarca do site" />
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default Logo
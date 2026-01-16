import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHader from '../IconesHeader'

function Header() {
    return (
        <header className='app-header'>
          <Logo/>
          <OpcoesHeader/>
          <IconesHader/>
        </header>
    )
}

export default Header;
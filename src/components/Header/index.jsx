import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHader from '../IconesHeader'

import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
`

function Header() {
    return (
        <HeaderContainer>
          <Logo/>
          <OpcoesHeader/>
          <IconesHader/>
        </HeaderContainer>
    )
}

export default Header;
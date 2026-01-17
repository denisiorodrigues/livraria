import logo from '../../images/logo.svg'

import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`

const LogoImage = styled.img`
	margin-right: 10px;
`

function Logo() {
	return (
		<LogoContainer>
			<LogoImage className='logo-img' src={logo} alt="logomarca do site" />
			<p><strong>Livraria </strong> Três Irmãos</p>
		</LogoContainer>
	)
}

export default Logo
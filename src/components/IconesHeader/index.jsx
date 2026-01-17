import sacola from '../../images/sacola.svg'
import lupa from '../../images/perfil.svg'

import styled from 'styled-components'

const Icone = styled.li`
  display: flex;
  align-items: center;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const iconesDeMenu = [lupa, sacola]

function IconesHader() {
  return (
    <Icones>
      {iconesDeMenu.map((icone) => (
        <Icone className='icone' key={icone}>
          <img src={icone} alt="icone menu" />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHader;
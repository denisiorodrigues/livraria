import './style.css'

import sacola from '../../images/sacola.svg' 
import lupa from '../../images/perfil.svg'

const iconesDeMenu = [lupa, sacola]

function IconesHader() {
    return (
        <ul className='opcoes-icone'>
            { iconesDeMenu.map((icone) => (
              <li className='icone' key={icone}><img src={icone} alt="icone menu"/></li>
            )) }
          </ul>
    );
}

export default IconesHader;
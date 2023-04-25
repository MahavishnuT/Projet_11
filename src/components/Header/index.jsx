import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-kasa.svg'

function Header() {
  return (
    <div>
      <img src={Logo} alt="logo-kasa" />
      <nav>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/about'}>A propos</Link>
      </nav>
    </div>
  )
}

export default Header

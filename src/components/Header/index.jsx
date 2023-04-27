import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-kasa.svg'
import "../../utils/style/Header/header.scss"

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo-kasa" className='logo-header'/>
      <nav>
        <Link to={'/'} className='link-nav'>Accueil</Link>
        <Link to={'/about'} className='link-nav'>À propos</Link>
      </nav>
    </header>
  )
}

export default Header

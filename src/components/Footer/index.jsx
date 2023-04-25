import Logo from "../../assets/logo-kasa.svg"
import "../../utils/style/Footer/footer.scss"


function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo-kasa" className="logo-footer"/>
      <p>2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
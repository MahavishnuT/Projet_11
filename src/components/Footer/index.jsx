import LogoFooter from "../../assets/logo-kasa-footer.png"
import "../../utils/style/Footer/footer.scss"


function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="logo-kasa" className="logo-footer"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
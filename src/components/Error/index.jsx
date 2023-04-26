import "../../utils/style/Error/error.scss"
import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="error-msg">
      <h1 className="error-msg_title">404</h1>
      <p className="error-msg_text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"} className="error-msg_link">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
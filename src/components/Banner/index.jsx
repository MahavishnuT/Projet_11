import { useLocation } from "react-router-dom"
import "../../utils/style/Banner/banner.scss"

function Banner({picture}) {
  const location = useLocation()
  const locationString = location.pathname.toString()

  console.log(locationString)

  return (
    <div className="banner">
      <img src={picture} alt="banner" className="banner-img"/>
      {locationString === "/"  
          ? <div className="banner-title">Chez vous, partout et ailleurs</div>
          : null
      }
    </div>
  )
}

export default Banner
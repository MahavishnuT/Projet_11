import "../../utils/style/Banner/banner.scss"

function Banner({picture, title}) {

  return (
    <div className="banner">
      <img src={picture} alt="banner" className="banner-img"/>
      <div className="banner-title">{title}</div>
    </div>
  )
}

export default Banner
import "../../utils/style/HousingItem/housing-item.scss"

function HousingItem({ title, cover }) {
  return (
    <li className="housing-item">
      <img src={cover} alt={title} className="housing-item_img" />
      <p className="housing-item_title">{title}</p>
    </li>
  )
}

export default HousingItem
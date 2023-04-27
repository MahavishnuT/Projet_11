import { Link } from 'react-router-dom'
import '../../utils/style/HousingItem/housing-item.scss'

function HousingItem({ id, title, cover }) {
  return (
    <li key={id} className="housing-item">
      <Link to={'/housing_sheet/' + id} className='housing-link'>
        <img src={cover} alt={title} className="housing-item_img" />
        <p className="housing-item_title">{title}</p>
      </Link>
    </li>
  )
}

export default HousingItem

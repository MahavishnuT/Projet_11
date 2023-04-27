import HousingItem from "../HousingItem";
import housingList from "../../data/logements.json"
import "../../utils/style/HousingList/housing-list.scss"

function HousingList() {
  return (
    <section>
      <ul className="housing-list">
        {housingList.map(({id, title, cover}) => (
          <HousingItem 
              key={id}
              id={id}
              title={title}
              cover={cover}
          />
        ))}
      </ul>
    </section>
  )
}

export default HousingList
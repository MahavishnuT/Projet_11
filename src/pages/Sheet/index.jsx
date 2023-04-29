import { useParams, Navigate } from 'react-router-dom'
import housingList from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import RatingScale from '../../components/RatingScale'
import '../../utils/style/Sheet/sheet.scss'

function Sheet() {
  const { id } = useParams()
  const housing = housingList.find((housing) => housing.id === id)

  if(housing === undefined) {
    return <Navigate to="*" />
  } 

  return (
    <section key={housing.id} className="housing-page">
      <Carousel pictures={housing.pictures} />
      <header className="housing-page_header">
        <article className="housing-page_header_infos">
          <h1 className="housing-page_header_infos_title">{housing.title}</h1>
          <h2 className="housing-page_header_infos_location">
            {housing.location}
          </h2>
          <ul className="housing-page_header_infos_tags">
            {housing.tags.map((tag, i) => (
              <li key={i} className="housing-page_header_infos_tags_tag">
                {tag}
              </li>
            ))}
          </ul>
        </article>

        <article className="housing-page_header_host">
          <div className="housing-page_header_host_infos">
            <p className="housing-page_header_host_infos_name">
              {housing.host.name}
            </p>
            <img
              src={housing.host.picture}
              alt="host-cover"
              className="housing-page_header_host_infos_img"
            />
          </div>
          <RatingScale scaleValue={housing.rating} />
        </article>
      </header>

      <article className="housing-page_collapses">
        <Collapse title="Description" content={housing.description} />
        <Collapse
          title="Équipements"
          content={housing.equipments.map((equipment, i) => (
            <div key={i} className="housing-page_collapses_content_list">
              {equipment}
            </div>
          ))}
        />
      </article>
    </section>
  )
}

export default Sheet

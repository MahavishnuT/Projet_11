import { useParams } from 'react-router-dom'
import housingList from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import RatingScale from '../../components/RatingScale'
import '../../utils/style/Collapse/collapse.scss'
import '../../utils/style/Sheet/sheet.scss'

function Sheet() {
  const { id } = useParams()
  const housing = housingList.find((housing) => housing.id === id)

  return (
    <section key={housing.id} className="housing-page">
      <Carousel pictures={housing.pictures} />
      <header className="housing-page_header">
        <article className="housing-page_header_infos">
          <h1 className="housing-page_header_infos_title">{housing.title}</h1>
          <h2 className="housing-page_header_infos_location">
            {housing.location}
          </h2>
          <div className="housing-page_header_infos_tags">
            {housing.tags.map((tag, i) => (
              <p key={i} className="housing-page_header_infos_tags_tag">
                {tag}
              </p>
            ))}
          </div>
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
        <div className="housing-page_collapses_content">
          <Collapse title="Description" content={housing.description} />
        </div>
        <div className="housing-page_collapses_content">
          <Collapse
            title="Équipements"
            content={housing.equipments.map((equipment, i) => (
              <ul key={i}>
                <li>• {equipment}</li>
              </ul>
            ))}
          />
        </div>
      </article>
    </section>
  )
}

export default Sheet

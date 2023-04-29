import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../../utils/style/RatingScale/ratingscale.scss"

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

function RatingScale({ scaleValue }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="housing-page_header_ratings">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            className="housing-page_header_ratings_rating"
          >
            {star}
          </span>
        ) : (
          <span
            key={rangeElem.toString()}
            className="housing-page_header_ratings_rating_grey"
          >
            {starGrey}
          </span>
        )
      )}
    </div>
  )
}

export default RatingScale
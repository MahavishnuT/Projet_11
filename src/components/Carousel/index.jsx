import { useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/style/Carousel/carousel.scss'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const imageChange = () => {
    const carouselImage = document.querySelector('.carousel-wrapper img')
    if (!carouselImage) {
      return 0
    }
    return carouselImage.width
  }

  const chevronLeft = (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="carousel-controls_chevron_left"
      onClick={goToPrevious}
    />
  )
  const ChevronRight = (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="carousel-controls_chevron_right"
      onClick={goToNext}
    />
  )

  return (
    <div className="carousel">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${(currentIndex) * imageChange()}px)` }}
      >
        {pictures.map((picture, key) => (
          <img
            className="carousel-wrapper_img"
            src={picture}
            key={key}
            alt="logement"
          />
        ))}
      </div>

      {pictures.length > 1 && (
        <>
          <div className="carousel-controls">
            {chevronLeft}
            {ChevronRight}
          </div>
          <div className="carousel-index">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel

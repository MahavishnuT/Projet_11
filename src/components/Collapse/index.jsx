import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../../utils/style/Collapse/collapse.scss'

const chevronUp = (
  <FontAwesomeIcon icon={faChevronUp} className="collapse-header_chevron" />
)
const chevronDown = (
  <FontAwesomeIcon icon={faChevronDown} className="collapse-header_chevron" />
)

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function openCollapse() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={openCollapse}>
        <h2 className="collapse-header_title">{title}</h2>
        {isOpen ? chevronUp : chevronDown}
      </div>
      {isOpen && (
        <div className="collapse-content">
          <div className="collapse-content_name">{content}</div>
        </div>
      )}
    </div>
  )
}

export default Collapse

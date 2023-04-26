import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../../utils/style/Collapse/collapse.scss'

const chevronUp = <FontAwesomeIcon icon={faChevronUp} />
const chevronDown = <FontAwesomeIcon icon={faChevronDown} />

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
          <p className="collapse-content_name">{content}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse

import React, { useState } from 'react'
import './DescriptionPanel.css'

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false)

  const toggleContent = () => {
    setIsContentVisible((prevState) => !prevState)
  }

  const closeContent = () => {
    setIsContentVisible(false)
  }

  return (
    <div className='description__panel'>
      <p className='description__header'>
        <span>{props.title}</span>

        {isContentVisible ? (
          <i className='fa-solid fa-chevron-down' onClick={closeContent}></i>
        ) : (
          <i className='fa-solid fa-chevron-up' onClick={toggleContent}></i>
        )}
      </p>

      {isContentVisible && (
        <p
          className={`description__content ${
            isContentVisible ? 'slide-in' : 'slide-out'
          }`}
        >
          {props.content}
        </p>
      )}
    </div>
  )
}

export default DescriptionPanel

// import React from 'react'
// import { useState } from 'react'

// import './DescriptionPanel.css'

// function Collapse(props) {
//   const [display, setDisplay] = useState('none')
//   const [isActive, setIsActive] = useState('')
//   const [rotate, setRotate] = useState('180deg')

//   function inputCollapse() {
//     setIsActive(isActive === '' ? 'active' : '')
//     setRotate(rotate === '180deg' ? '0deg' : '180deg')
//     setDisplay(display === 'block' ? 'none' : 'block')
//   }

//   return (
//     <div>
//       <div className='collapse-block' onClick={inputCollapse}>
//         <h1 id='title'>{props.title}</h1>
//         <button>
//           <i
//             className='fa-solid fa-chevron-down'
//             style={{ rotate: `${rotate}` }}
//           ></i>
//         </button>
//       </div>
//       <div
//         className={`texte ${isActive}`}
//         key={props.id}
//         style={{ display: `${display}` }}
//       >
//         {props.texte}
//       </div>
//     </div>
//   )
// }

// export default Collapse

import React from 'react'
import './ApartmentPage.css'

import logementsData from '../logements.json'
import ApartmentDescription from '../components/ApartmentDescription/ApartmentDescription.jsx'
import ApartmentBanner from '../components/ApartmentBanner/ApartmentBanner.jsx'
import ApartmentHeader from '../components/ApartmentHeader/ApartmentHeader.jsx'

// function ApartmentPage() {
//   const logement = logementsData

//   return (
//     <div className='apartment-page'>
//       <div>
//         <img
//           className='apartment-img'
//           src={logement.cover}
//           alt={logement.title}
//         />
//       </div>
//       <div className='apartment__title'>
//         <h3>{logement.title}</h3>
//         <h4>{logement.location}</h4>
//         {logement.tags && logement.tags.length > 0 && (
//           <p>{logement.tags.join(', ')}</p>
//         )}
//       </div>
//       <div className='apartment__owner'>
//         {logement.host && (
//           <>
//             <h5>{logement.host.name}</h5>
//             {logement.host.picture && (
//               <img
//                 src={logement.host.picture}
//                 alt={logement.host.name}
//                 className='host-picture'
//               />
//             )}
//           </>
//         )}
//         <div className='apartment__owner__stars'>
//           <span>☆</span>
//           <span>☆</span>
//           <span>☆</span>
//           <span>☆</span>
//           <span>☆</span>
//           {logement.rating}
//         </div>
//       </div>
//       <div className='apartment__description'>
//         <p>Description</p>
//         <p>{logement.description}</p>
//       </div>
//       {logement.equipments && (
//         <div className='apartment__equipment'>
//           <p>Equipements</p>
//           <ul>
//             {logement.equipments.map((equipment, index) => (
//               <li key={index}>{equipment}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ApartmentPage

// function ApartmentPage() {
//   return (
//     <div className='apartment-page'>
//       {logementsData.map((logement, index) => (
//         <div key={index}>
//           <img
//             className='apartment-img'
//             src={logement.cover}
//             alt={logement.title}
//           />
//           <div className='apartment__title'>
//             <h3>{logement.title}</h3>
//             <h4>{logement.location}</h4>
//             {logement.tags && logement.tags.length > 0 && (
//               <p>{logement.tags.join(', ')}</p>
//             )}
//           </div>
//           <div className='apartment__owner'>
//             {logement.host && (
//               <>
//                 <h5>{logement.host.name}</h5>
//                 {logement.host.picture && (
//                   <img
//                     src={logement.host.picture}
//                     alt={logement.host.name}
//                     className='host-picture'
//                   />
//                 )}
//               </>
//             )}
//             <div className='apartment__owner__stars'>
//               {generateRatingStars(logement.rating).map((star, index) => (
//                 <span key={index}>{star}</span>
//               ))}
//             </div>
//           </div>
//           <div className='apartment__description'>
//             <p>Description</p>
//             <p>{logement.description}</p>
//           </div>
//           {logement.equipments && (
//             <div className='apartment__equipment'>
//               <p>Equipements</p>
//               <ul>
//                 {logement.equipments.map((equipment, index) => (
//                   <li key={index}>{equipment}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

// function generateRatingStars(rating) {
//   const stars = []
//   const roundedRating = Math.round(rating)
//   for (let i = 0; i < 5; i++) {
//     if (i < roundedRating) {
//       stars.push('★')
//     } else {
//       stars.push('☆')
//     }
//   }
//   return stars
// }

// export default ApartmentPage

function ApartmentPage() {
  return (
    <div className='apartment-page'>
      <ApartmentBanner />
      <ApartmentHeader />
      <div className='apartment__description__area'>
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  )
}

export default ApartmentPage

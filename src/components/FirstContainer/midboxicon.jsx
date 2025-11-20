import React from 'react'
import './midboxicon.css'

const midboxicon = ({image,name}) => {
  return (
    <div className="midboxicon">
         <img src={image} alt="image" className="mbii" />
         <p>{name}</p>
      </div>
  )
}

export default midboxicon;
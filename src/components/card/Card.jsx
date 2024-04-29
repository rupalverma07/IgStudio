import React from 'react'

const Card = ({itemObj}) => {
  return (
    <div className="card" >
    <img src={itemObj.imgUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{itemObj.title}</h5>
      <p className="card-text">{itemObj.description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card

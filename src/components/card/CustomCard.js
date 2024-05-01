import React from 'react'
import './card.css'

const CustomCard = ({data}) => {
  return (
    <div className={data.name==='Sanfole'?'teamCard2':'teamCard'}>
      <div >
        <img src={data.img}/>
      </div>
      <div className='cardContent'>
        <h5>{data.name}</h5>
        <p>{data.text}</p>
      </div>
    </div>
  )
}

export default CustomCard

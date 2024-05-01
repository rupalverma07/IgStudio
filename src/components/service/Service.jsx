import React from 'react'
import './Service.css';
import {serviceCard} from '../../constant/data'
import Card from '../card/Card';

const Service = () => {
  return (
    <>
    <div className='d-flex justify-content-between service'>
      <div className='about'>
        <h2>Let's Introduce Ourself</h2>
      </div>
      <div className='rightAbout'>
        <h3>Criminal Lawyer</h3>
        <p>Amet minim mollit non deserunt ullamco est
           sit aliqua dolor do amet sint. Velit officia consequatduis
           enim velit mollit Exercitation.</p>
      </div>
    </div>
    <div className='serviceCard'>
          <div className='serviceHeading'>
          <h2>Why Choose us?</h2>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
                {serviceCard.map(item => <Card itemObj={item} type='service'/>)}
           </div>
           </div>
    </>
  )
}

export default Service

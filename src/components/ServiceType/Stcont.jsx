import React from 'react'
import Lbbox from './lbbox'
import CServices from './CSevices'
import './Stcont.css'
const Stcont = ({every}) => {
  return (
    <>
    <div className="lbox">
      <div className="sName">{every}</div>
      <div className="libox">
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>
         <Lbbox st="Almirad"/>


      </div>
    </div>
    
    <div className="box2">
      <div className="nm">Almirah</div>
      <div className='box3'>
        <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K"price="10000 " duration="4 days" image="src/assets/images/bed1.png"/>
      </div>
    </div>
    </>
  )
}

export default Stcont
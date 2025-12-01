import React from 'react'
import CServices from './CSevices'
import ServiceBox from '../AllServices/ServiceBox'
import './Servicetype.css'
const Stcont = ({ every }) => {
  const carpenterItems = [
    "Bed",
    "Almirah",
    "Kitchen",
    "Doors",
    "Tables",
    "Chairs",
    "Windows",
    "Shelves",
    "Cabinets",
  ];
  return (
    <>
      <ServiceBox serviceName={every} items={carpenterItems} />

      <div className="box2">
        <div className="nm">Bed</div>
        <div className='box3'>
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />    
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
        </div>
        
        <div className="nm">Almirah</div>
        <div className='box3'>
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
          <CServices name="Normal Bed (with side tables)" rating="4.5" reviews="5K" price="10000 " duration="4 days" image="images/bed1.png" />
        </div>
      </div>
    </>
  )
}

export default Stcont
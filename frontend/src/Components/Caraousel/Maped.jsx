import React from 'react'
import { health,brands,healthCare_device,ayurveda } from './data'
import ManualCarousels from './Caraousel'
const Maped = () => {
  return (
    <div>
        <ManualCarousels allData={health}/>
        <ManualCarousels allData={brands}/>
        <ManualCarousels allData={healthCare_device}/>
        <ManualCarousels allData={ayurveda}/>
    </div>
  )
}

export default Maped
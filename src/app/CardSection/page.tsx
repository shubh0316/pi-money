"use client"
import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

function Cardpage() {
  return (
    <div>
       <div className='my-20 md:my-40'><Heading /></div>
      <div className='mt-20 mb-16'><Cards /></div>
    </div>
  )
}

export default Cardpage;

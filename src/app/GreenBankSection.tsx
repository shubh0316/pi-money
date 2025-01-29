import React from 'react'
import Container from './_components/Container'
import Image from 'next/image'
import qr from "@/assets/qr.png"
function GreenBankSection() {
  return (
    <div>
        <Container> 
       <div className='mt-20 flex flex-col justify-around items-center space-y-4'>
       <div className='text-6xl font-bold text-center'>
        The greenBank Difference
       </div>
       <p className='text-gray-400 text-center'>Discover why GreenBank is the smart choice for secure banking and personalized financial growth.</p>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
        <div className='border rounded-3xl flex flex-col  text-start'>
            <div className='bg-[#D6E9FF] rounded-t-3xl'>
             <Image src={qr} alt="" />
            </div>
            <div className='p-4'> 
          <div className='text-2xl font-semibold'>
           Secure Banking
          </div>
          <div className='text-md'>Bank with confidence - our cutting-edge security keeps your finances safe, always.</div>
          </div>
        </div>
        <div className='border rounded-3xl flex flex-col  text-start'>
            <div className='bg-[#D6E9FF] rounded-t-3xl'>
             <Image src={qr} alt="" />
            </div>
            <div className='p-4'> 
          <div className='text-2xl font-semibold'>
           Secure Banking
          </div>
          <div className='text-md'>Bank with confidence - our cutting-edge security keeps your finances safe, always.</div>
          </div>
        </div>
        <div className='border rounded-3xl flex flex-col  text-start'>
            <div className='bg-[#D6E9FF] rounded-t-3xl'>
             <Image src={qr} alt="" />
            </div>
            <div className='p-4'> 
          <div className='text-2xl font-semibold'>
           Secure Banking
          </div>
          <div className='text-md'>Bank with confidence - our cutting-edge security keeps your finances safe, always.</div>
          </div>
        </div>
       </div>
       </div>
       </Container>
    </div>
  )
}

export default GreenBankSection

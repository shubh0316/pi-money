import React from 'react'
import Container from './_components/Container'
import Image from 'next/image'
import qr from "@/assets/qr.png"
import graph from "@/assets/graph.png";
import touch from "@/assets/touch.png";
function GreenBankSection() {
  return (
    <div>
        <Container> 
       <div className='mt-20 flex flex-col justify-around items-center space-y-6'>
       <div className='text-4xl md:text-5xl font-semibold text-center'>
        The greenBank <span className='text-[#0171DF]'>Difference</span> 
       </div>
       <p className='text-[#334D6C] text-center md:w-1/2 text-[20px]'>Discover why GreenBank is the smart choice for secure banking and personalized financial growth.</p>
       <div className='mt-40'>  
       <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-10'>
        <div className='border rounded-3xl flex flex-col  text-start  space-y-6'>
            <div className='bg-[#D6E9FF] rounded-t-3xl'>
             <Image src={qr} alt="" width={360} />
            </div>
            <div className='p-4 space-y-4'> 
          <div className='text-2xl tracking-wider font-semibold'>
           Scan to Pay
          </div>
          <div className='text-md text-start text-[#334D6C]'>Seamless payments at your fingertips - scan, pay, and go with ease.</div>
          </div>
        </div>
        <div className='border rounded-3xl flex flex-col  text-start space-y-6'>
            <div className='bg-[#D6E9FF] rounded-t-3xl'>
             <Image src={touch} alt="" width={362} className='p-10' />
            </div>
            <div className='p-4 space-y-4'> 
          <div className='text-2xl tracking-wider font-semibold'>
           Secure Banking
          </div>
          <div className='text-md text-start text-[#334D6C]'>Bank with confidence - our cutting-edge security keeps your finances safe, always.</div>
          </div>
        </div>
        <div className='border rounded-3xl flex flex-col  text-start space-y-5'>
            <div className='bg-[#D6E9FF] rounded-t-3xl p-4 '>
             <Image src={graph} alt="" className='mt-6' width={329}  />
            </div>
            <div className='p-4 space-y-4'> 
          <div className='text-2xl tracking-wider font-semibold'>
           Personalized Investing
          </div>
          <div className='text-md text-start text-[#334D6C]'>Invest smarter, not harder - personalized recommendations tailored to your financial goals.</div>
          </div>
        </div>
       </div>
       </div>
       </div>
       </Container>
    </div>
  )
}

export default GreenBankSection

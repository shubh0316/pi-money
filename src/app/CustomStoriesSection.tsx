import React from 'react';
import Image from 'next/image';
import stripe from "@/assets/Stripe.png";
import Container from './_components/Container';
function CustomStoriesSection() {
  return (
    <div>
           <Container>
      <div className='mt-20 flex flex-col justify-around items-center space-y-4'>
     
       <div className='text-6xl font-bold text-center'>
        The greenBank Difference
       </div>
       <p className='text-gray-400 text-center'>Discover why GreenBank is the smart choice for secure banking and personalized financial growth.</p>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
        <div className='border bg-[#D6E9FF] mt-10 rounded-3xl flex flex-col  text-start p-4 justify-between space-y-20'>
            <div className=''>
             <Image src={stripe} alt="" width={100} />
            </div>
            <div className='text-md text-start'>
            As a leading payment processing platform, integrating with GreenBank has been instrumental in enhancing our offerings to businesses worldwide. GreenBank's commitment to innovation and user-centric design aligns seamlessly with our mission to simplify online payments. Highly Recommended
            </div>
            <div className='flex justify-end flex-col'>
   <div className='text-2xl font-semibold'>
   MIKE PATEL
   </div>
   <p>CEO, STRIPE</p>
            </div>
        </div>
        <div className='border bg-[#D6E9FF] mt-10 rounded-3xl flex flex-col  text-start p-4 justify-between space-y-20'>
            <div className=''>
             <Image src={stripe} alt="" width={100} />
            </div>
            <div className='text-md text-start'>
            As a leading payment processing platform, integrating with GreenBank has been instrumental in enhancing our offerings to businesses worldwide. GreenBank's commitment to innovation and user-centric design aligns seamlessly with our mission to simplify online payments. Highly Recommended
            </div>
            <div className='flex justify-end flex-col'>
   <div className='text-2xl font-semibold'>
   MIKE PATEL
   </div>
   <p>CEO, STRIPE</p>
            </div>
        </div>
        <div className='border bg-[#D6E9FF] mt-10 rounded-3xl flex flex-col  text-start p-4 justify-between space-y-20'>
            <div className=''>
             <Image src={stripe} alt="" width={100} />
            </div>
            <div className='text-md text-start'>
            As a leading payment processing platform, integrating with GreenBank has been instrumental in enhancing our offerings to businesses worldwide. GreenBank's commitment to innovation and user-centric design aligns seamlessly with our mission to simplify online payments. Highly Recommended
            </div>
            <div className='flex justify-end flex-col'>
   <div className='text-2xl font-semibold'>
   MIKE PATEL
   </div>
   <p>CEO, STRIPE</p>
            </div>
        </div>
       </div>
       </div>
       </Container>
    </div>
  )
}

export default CustomStoriesSection

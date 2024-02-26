'use client'


import FooterSection from '@/components/FooterSection'
import React from 'react'

const Mainlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' flex flex-col overflow-hidden'>
   <div className='md:mx-20 mx-2' >  
   {children}
   </div>
   <FooterSection/>
    
    </div>
  )
}

export default Mainlayout
 'use client'
import React from 'react'
 
import { Input } from './ui/input'
import { Button } from './ui/button'

const SubscriptionSection = () => {
  return (
    <div className=' flex items-center   flex-wrap p-5  justify-center mt-10 gap-5'> 

       <h4 className='text-2xl mb-3'>Sign up and get exclusive <br /> special deals</h4>
       <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email"  className=' border h-10'/>
      <Button type="submit" className='h-10'>Subscribe</Button>
    </div>
    </div>
  )
}

export default SubscriptionSection
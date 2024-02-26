'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const FooterSection = () => {
  return (
    <div className='bg-[#212731] p-5 flex flex-wrap  justify-between'> 
  <div>
    <h3 className='text-white uppercase text-xl'>Categories</h3>
    <ul className='flex flex-col gap-4 mt-3'>
        <li className='text-sm text-[#B6BDC4]'> Web Builder</li>
        <li className='text-sm text-[#B6BDC4]'> Hosting</li>
        <li className='text-sm text-[#B6BDC4]'> Data Center</li>
        <li className='text-sm text-[#B6BDC4]'>Robotic-Automation</li>
    </ul>
  </div>

  <div>
    <h3 className='text-white uppercase text-xl'>Categories</h3>
    <ul className='flex flex-col gap-4 mt-3'>
        <li className='text-sm text-[#B6BDC4]'> Web Builder</li>
        <li className='text-sm text-[#B6BDC4]'> Hosting</li>
        <li className='text-sm text-[#B6BDC4]'> Data Center</li>
        <li className='text-sm text-[#B6BDC4]'>Robotic-Automation</li>
    </ul>
  </div>

  <div>
  <Select >
  <SelectTrigger className=" text-white">
    <SelectValue placeholder="United States" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="united States">United States</SelectItem>
    <SelectItem value="india">India</SelectItem>
    <SelectItem value="russia">Russia</SelectItem> 
  </SelectContent>
</Select>

  </div>

    </div>
  )
}

export default FooterSection
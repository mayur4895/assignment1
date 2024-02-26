'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Label } from './ui/label';
  

interface PriceCardProps{
    title: string;
    price: number;
    off:number;
    img:string;
    limited: boolean;
    desc:string;
    secondprice:number;
    
    
}
const PriceCard = ({
img,
title,
off,
limited,
price,
desc,
secondprice
}:PriceCardProps) => {
  return (
    <Card className='p-4  flex  justify-center text-center flex-col items-center'>
          
        <Image src={img} alt="img"  width={200} height={200}    className="  items-center text-center object-contain " />  
   
        <div className='flex mt-3 gap-4'>
          {
            off && <Badge  variant="secondary">{off}% off</Badge> 
          }    
           {
            limited && <Badge  variant="secondary">Limited time </Badge>
           }   
        </div>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardHeader>
    <CardContent className='flex gap-2 items-center'>
       <Label>${price}</Label>
       <span className='text-sm text-gray-400'>${secondprice}</span>
         <p className='text-xs text-red-400'>{off}% off</p>

    </CardContent>
    <CardFooter>
       <Button>View Deal</Button>
    </CardFooter>
  </Card>
   
  )
}

export default PriceCard
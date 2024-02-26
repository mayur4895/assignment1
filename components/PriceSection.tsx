import React from 'react'
import PriceCard from './PriceCard'

const PriceSection = () => {
  return (
    <div  className='mt-20'> 
     <h3 className='text-3xl'>Related deals you might like for </h3>

  <div className='flex flex-wrap gap-4 mt-4 justify-center'>
    <PriceCard
    img={"/img.png"}
    title={"Webbuilder 1"}
    off={20}
    limited={true}
    price={39.96}
    desc={"Computer  Modern clasic with wix support"}
    secondprice={49.96}
    
    />
        <PriceCard
    img={"/img.png"}
    title={"Webbuilder 1"}
    off={20}
    limited={true}
    price={39.96}
    desc={"Computer  Modern clasic with wix support"}
    secondprice={49.96}
    
    />
        <PriceCard
    img={"/img.png"}
    title={"Webbuilder 1"}
    off={20}
    limited={true}
    price={39.96}
    desc={"Computer  Modern clasic with wix support"}
    secondprice={49.96}
    
    />
  </div>
    </div>
  )
}

export default PriceSection
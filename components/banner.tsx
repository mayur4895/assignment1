 import React from 'react'
import { Separator } from './ui/separator'
import { ArrowBigDown, CheckCircle } from 'lucide-react'
import { LuChevronDown, LuChevronRight } from "react-icons/lu";
import { FiAlertOctagon } from "react-icons/fi";
import ServiceCard from './ServiceCard';
 const Banner = () => {
   return (
   
   <>
     <div className='mt-[80px]     md:h-[155px]  h-[140px]'>
      
         <span className='lg:text-5xl text-3xl  md:text-4xl     '>Best Website builders in the US</span>
         <div className='  w-full'>
            <Separator className='mb-2'/>
          <div className='flex justify-between items-center flex-wrap'>
        <div className='flex gap-4'>
        <div className='flex gap-2 '>
        <CheckCircle size={20}/>
    
             <span className='text-[14px] flex gap-2 items-end top-[189px] h-[20px] whitespace-nowrap'>Last Updated - 
             <p className='text-[13px] font-normal'>
             February 22, 2020
              </p></span>
          </div>
          <div className='flex gap-2 whitespace-nowrap'>
          <FiAlertOctagon  size={20}/><span className='text-[14px] top-[189px] h-[20px]'>Advertising Disclosure</span>
          </div>
        </div>
        <div className='flex gap-2 mt-2'>
             <span className='text-[14px] top-[189px] h-[20px]'>Last Updated</span> <LuChevronDown  size={20}/>
          </div>
          </div>
         </div>

     </div>
 <div className=' flex md:gap-10 gap-4 flex-wrap'>
  <span className='text-[14px]   whitespace-nowrap'>Tools</span>
  <span className='text-[14px]  whitespace-nowrap'>AWS Builder</span>
  <span className='text-[14px]  whitespace-nowrap'>Start Build</span>
  <span className='text-[14px]  whitespace-nowrap'>Build Supplies</span>
  <span className='text-[14px]  whitespace-nowrap'>Tooling</span>
  <span className='text-[14px]  whitespace-nowrap'>BlueHosting</span>
 </div>

 <div className=' flex gap-1 mt-8 flex-wrap w-full'>
  <span className='text-[13px]  whitespace-nowrap'>Home </span>
  <LuChevronRight/>
  <span className='text-[13px] whitespace-nowrap'>Hosting for all</span>
  <LuChevronRight/>
  <span className='text-[13px] whitespace-nowrap'>Hosting</span>
  <LuChevronRight/>
  <span className='text-[13px] whitespace-nowrap'>Hosting6</span>
  <LuChevronRight/>
  <span className='text-[13px] whitespace-nowrap'>Hosting5</span>
  
 </div>
 
     <ServiceCard 
      img={"/img.png"}
      imgcaption={"Builder 1"}
      title={"WixPro 72-Inch Responsive Website Builder"}      
      description={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
 
      mainHighlightdesc={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
      showMorelink={"url of link"}
        viewlink={"url of link"}
      rating={9.8}
      productchoice={"Best Choice"}
      ratingcaptions={"Exceptional"}
      
    
      
     />
  <ServiceCard 
      img={"/img.png"}
      imgcaption={"Builder 1"}
      title={"SiteCraft 68-Inch Ultimate Web Design Studio"}      
      description={" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"}
 
      mainHighlightdesc={"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."}
      showMorelink={"url of link"}
        viewlink={"url of link"}
      rating={9.5}
      productchoice={"Best Value"}  
      off={20}
      ratingcaptions={"Excellent"} 
 
       
    
      
     />

<ServiceCard 
      img={"/img.png"}
      imgcaption={"Builder 1"}
      title={"WixPro 72-Inch Responsive Website Builder"}      
      description={" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
 
      mainHighlightdesc={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
      showMorelink={"url of link"}
        viewlink={"url of link"}
      rating={9.3} 
      ratingcaptions={"Exceptional"} 
      
     />

<ServiceCard 
      img={"/img.png"}
      imgcaption={"Builder 1"}
      title={"CDK Resposive Builder:"}      
      description={"An extensive library of widgets and apps, and detailed step-by-step guides"}
 
      mainHighlightdesc={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
      showMorelink={"url of link"}
        viewlink={"url of link"}
      rating={9.1}  
      off={26}
      ratingcaptions={"Very Good"}
      extrainfomain={true}
      loveIt={true} 
      
     />
 
 

 </>
   )
 }
 
 export default Banner
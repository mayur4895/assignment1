'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";
import Image from "next/image";
import { Check, ChevronDown, Trophy } from "lucide-react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Badge } from "./ui/badge";

type captionrate ="Exceptional" |"Very Good" | "Excellent";
type productchoice ="Best Choice" |"Best Value" ;

const stars = {
    "Exceptional": <div className="flex gap-1 items-center"><IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/></div>,
    "Very Good": <div className="flex gap-1 items-center"><IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
      <IoIosStar color="#FFB80F"  size={14}/></div>,
    "Excellent":<div className="flex gap-1 items-center"><IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStar color="#FFB80F"  size={14}/>
    <IoIosStarHalf color="#FFB80F"  size={14}/></div>,
}

interface ServiceCardProps{
    img:string;
    imgcaption:string;
    title:string;
    description:string;  
    mainHighlightdesc?:string;
    showMorelink:string;
    viewlink:string;
    rating:Number;
    off?:Number;
    productchoice?:productchoice ;
    ratingcaptions: captionrate;
    extrainfomain?:boolean;
    loveIt?:boolean;

}

const ServiceCard = ({ 
    img,
    imgcaption,
    title,
    description, 
    mainHighlightdesc, 
    rating,
    showMorelink,
    viewlink,
     productchoice,
    off,
    ratingcaptions,
    extrainfomain,
    loveIt=false,
}: ServiceCardProps) => {
  return (
    <div className="mt-3  flex    flex-wrap   justify-around p-4 relative shadow-md">
        {productchoice && (<div className=" absolute p-2 bg-[#FF7724]  text-white top-0 left-0 rounded-r-md">
            <span className="flex items-center gap-4"><Trophy/> {productchoice}</span>
        </div>)}
        <div className=" flex  flex-col   items-start   gap-2">
   
    <Image src={img} alt="img"  width={200} height={200}    className="  object-contain " />
 
            <span className="text-[13px]">{imgcaption}</span>
        </div>
 
              

        <Card className="border-none  overflow-hidden">
  <CardHeader className="">
    <CardTitle className="text-[14px] font-bold">{title}  
    </CardTitle>
    <CardDescription className="text-[13px]  md:w-[400px] ">{description}</CardDescription>
  </CardHeader>
  <CardContent className="">
    { off && (<Badge variant="secondary" className="mb-1">{off.toString()} %  off</Badge>)}
  <h5 className="text-[16px] h-[20px] font-bold">Main highlights</h5>
 
  {extrainfomain ? (
  <div className="flex flex-col gap-4 mt-3 bg-zinc-100 p-3">
    <p className="flex items-center gap-2"><span className="text-blue-400">9.9</span> building responsive</p>
    <p className="flex items-center gap-2"><span className="text-blue-400">8.9</span> Cool</p>
    <p className="flex items-center gap-2"><span className="text-blue-400">8.9</span> Docs</p>
  </div>

  ) : (  <CardDescription className="text-[13px] mt-2 w-[480px] pl-4">{mainHighlightdesc}</CardDescription>) }

  {loveIt && (
    <div className="mt-3 ">
        <h2 className="text-[16px]">Why we love it</h2>
        <div className="flex flex-col gap-4  mt-1 p-3"> 
    
    <p className="flex items-center gap-2"> <Check size={13} className="text-green-600"/>Documentation</p>
    <p className="flex items-center gap-2"> <Check size={13} className="text-green-600"/> Easy Use</p>
    <p className="flex items-center gap-2"> <Check size={13} className="text-green-600"/> Out of box</p>
  </div>
    </div>
  )}
  </CardContent>
  <CardFooter>
      <Button variant={"ghost"} className="flex gap-2 items-center text-[16px]">show more <ChevronDown size={16}/></Button>
       
    <Button   className="w-[232px]   ">View</Button>
  </CardFooter>
</Card>  
   
 <div className="rate_Card  md:w-[135px] md:h-[118px]   w-[125px]  h-[108px] bg-[#F3F9FF] shadow-md border  right-0 absolute top-0     ">
 <div className="flex justify-center items-center w-full h-full flex-col gap-2">
 <span className="text-[32px] ">{rating.toString()}</span>
 <p className="text-[14px]">{ratingcaptions}</p>
 <div>{stars[ratingcaptions]}</div>
 </div>
  </div>
 
 
      
 

 
  
</div>

  )
}

export default ServiceCard;
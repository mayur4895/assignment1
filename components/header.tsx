'use client'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Grid, Search } from "lucide-react"
import { LuGrip } from "react-icons/lu";
import { UserButton, auth } from "@clerk/nextjs"

const FormSchema = z.object({
  Searchvalue: z.string().min(2, {
    message: "Searchvalue must be at least 2 characters.",
  }),
})
const  Header = () => {
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Searchvalue: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
   console.log(data);
   
  }

  return (
    <>

 
 
    <Menubar className=" z-50 h-[64px] fixed top-0 right-0 w-full bg-[#212731]  text-white items-center justify-center ">
         <MenubarMenu >
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="Searchvalue"
          render={({ field }) => (
            <FormItem>
     
              <FormControl>
                 <div className=" relative  w-[250px]">
                 <Input type=" text" placeholder="Search Here" {...field} className="  pl-10  bg-white text-zinc-800" />
                <Search className=" absolute top-2 left-3 text-zinc-900 cursor-pointer"   size={18}/>
                 </div>
              </FormControl> 
            </FormItem>
          )}
        /> 
      </form> 
      </Form>
      </MenubarMenu>
 
     <MenubarMenu>
        <MenubarTrigger className=" hidden md:block whitespace-nowrap">Categories</MenubarTrigger> 
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className=" hidden md:block whitespace-nowrap">Website Builders</MenubarTrigger> 
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className=" hidden md:block whitespace-nowrap">Today's deals</MenubarTrigger> 
      </MenubarMenu>
   
      <MenubarMenu >
      <Sheet>
  <SheetTrigger className="md:hidden block">
    <LuGrip size={25}/>
   </SheetTrigger>
  <SheetContent>
    <SheetHeader >
      <SheetTitle><UserButton/></SheetTitle>
      <SheetDescription>
         
      </SheetDescription>
    </SheetHeader>
    <MenubarMenu>
        <MenubarTrigger className=" mt-5 whitespace-nowrap">Categories</MenubarTrigger> 
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className=" mt-5 whitespace-nowrap">Website Builders</MenubarTrigger> 
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className=" mt-5 whitespace-nowrap">Today's deals</MenubarTrigger> 
      </MenubarMenu>
  </SheetContent>
</Sheet>
      </MenubarMenu>
    </Menubar>

 
    </>
  )
}


export default Header;
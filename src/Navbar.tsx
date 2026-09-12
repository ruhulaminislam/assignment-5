
import { FiMenu } from "react-icons/fi"
import navIcon from "./assets/her.png"

export const Navbar = () => {
    
    return (
       <div className="sticky top-0 z-50 bg-[#FFFFFF]">
         <div className=" flex justify-between  items-center container mx-auto py-5  ">
              <div className="md:hidden ">
               <FiMenu />
              </div>
             <div className="flex items-center gap-2">
               
               <img src={navIcon} alt="" />
              <h1 className="font-bold text-2xl  bg-brand-gradient bg-clip-text text-transparent ">Dev Stack</h1>
             </div>
             <div className="hidden md:flex gap-3 text-[#475569] ">
                <p className="text-[#DB2777]">Home</p>
                <p>Technologies</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
             </div>
             <div className="space-x-3">
                <button className="text-[#475569]">Sign In</button>
                <button className="bg-[#D91B7E] text-[#FFFFFF] py-2 px-3 rounded-full">Sign Up</button>
             </div>
              
        
        </div>
           <hr className="w-full border-[#E4E8EC]"/> 
       </div>
    )
}
import foterIcon from "./assets/logo-text.png"



export const FooterSection = () => {
    
    return (
        
        <div className="mt-15">
           <hr className="w-full border-[#E4E8EC]"/> 
           <div className="container mx-auto p-10 flex justify-between text-[#64748B]"> 
             <div className="flex flex-col items-center md:grid">
                <img src={foterIcon} alt="" className="mb-2.5" />
                <p className=" text-center md:text-left">Curated tools, technologies, and resources for developers building <br  /> modern software.</p>
                <ul className="flex gap-2 text-[#475569] mt-5">
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
             </div>
             <div className="hidden md:grid">
                <h4 className="text-[#0F172A] font-bold">PRODUCT</h4>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
             </div>
             <div className="hidden md:grid">
                <h4 className="text-[#0F172A] font-bold">COMPANY</h4>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
             </div>
             <div className="hidden md:grid">
                <h4 className="text-[#0F172A] font-bold">LEGAL</h4>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
             </div>
           </div>
           <div className="container mx-auto p-10 "><hr className="w-full border-[#E4E8EC]"/> </div>
           <div className="container mx-auto p-10 flex justify-between text-[#94A3B8]">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-2">
                <p>Privacy</p>
                <p>Terms</p>
            </div>
           </div>
        </div>
    )
}
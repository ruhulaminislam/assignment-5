
import HeroImg from "./assets/banner-stack.png"

export const  Hero = () => {
    
    return (
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto ">
               <div>
                <h1 className="font-bold text-5xl text-[#0F172A]">Build Your Ideal <br /><span className=" bg-brand-gradient bg-clip-text text-transparent">Development Stack</span></h1>
                <p className="mt-5 mb-7">Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits your <br />next project.</p>
                   <button className="bg-brand-gradient text-[#FFFFFF] py-2 px-3 rounded-2xl">Explore Technologies</button>
                <button className="border border-[#D8DADE] text-[#374151] ml-4 py-2 px-10 rounded-2xl">Learn More</button>
               </div>
               <div>
                <img src={HeroImg} alt="" className="mr-5"/>
               </div>
        </div>
    )
}

// bg-[linear-gradient(to_right,#FB502D,#E22A68,#D91C7D,#B726A5,#8A35DC)]
// bg-[linear-gradient(to_right,#F9721C,#F6683A,#F36051,#F15967,#EE4E8B)]

import { use, useState } from "react"
import type { TechnologiesDataProps } from "./TechnologiesData"

import { Stack } from "./Stack"
import TechologiesCard from "./TechologiesCard"


export interface TechnologiesProps {
    technologiesData: Promise<TechnologiesDataProps[]>
}

export const Technologies = ({ technologiesData}: TechnologiesProps) => {
  const [cardData,setCardData]=useState<TechnologiesDataProps[]>([])
    const tecData=use(technologiesData)
    return (
        <div className="container mx-auto">
           <div className="mb-7 text-center md:text-left">
             <h1 className="font-bold text-4xl">Explore the <span className="text-[#D94CAB]">Technologies</span></h1>
            <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
             <div className=" md:col-span-9 bg-[#FFFFFF]">
                <TechologiesCard tecData={tecData} cardData={cardData} setCardData={setCardData}></TechologiesCard>
             </div>
             <div className="md:col-span-3">
               <Stack  cardData={cardData} setCardData={setCardData} ></Stack>
             </div>

           </div>
        </div>
    )
}
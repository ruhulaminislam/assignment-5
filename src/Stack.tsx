import { RiCloseLargeLine } from "react-icons/ri"
import type { TechnologiesDataProps } from "./TechnologiesData"
import { Bounce, toast } from "react-toastify"




export interface StackProps {
    cardData:TechnologiesDataProps[]
    setCardData: React.Dispatch<React.SetStateAction<TechnologiesDataProps[]>>
}

export const Stack = ({ cardData,setCardData}: StackProps) => {
       const handleDeleteitme=(card:TechnologiesDataProps)=>{
           if(cardData.includes(card)){
            const NewCard=cardData.filter(car=>car.id !==card.id)
            setCardData(NewCard)
            toast.info('Item removed from stack!', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
           }
       }
       const handleAllDelete=()=>{
            setCardData([])
            toast.warn("All items removed from Stack!", {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
       }
    return (
        <div className="border border-[#F1F5F9] p-5 rounded-2xl">
             <h1 className="text-[#0F172A] text-3xl font-bold">Your Stack</h1>
              <h1 className="text-[#94A3B8] mb-3">{cardData.length===0 ? "No technologies selected yet." : `${cardData.length} technologies selected yet`}</h1>
              <div className=" flex flex-col space-y-2 justify-center items-center p-6 border border-dashed border-[#E2E8F0] rounded-2xl mb-10">
                {cardData.length===0 ? "Your stack is empty.": cardData.map((card:TechnologiesDataProps )=>{
                  return(
                    <div key={card.id} className="flex justify-between w-full border  border-[#E2E8F0] items-center p-3 rounded-2xl">
                        <div className="flex justify-center items-center gap-2" >
                          <img src={card.icon} alt="" className="h-[50px] w-[50px] object-contain" />
                          <div className="flex flex-col justify-center ">
                             <h2 className="text-[#0F172A] font-bold ">{card.name}</h2>
                              <p className="text-[#94A3B8]">{card.category}</p>
                          </div>
                        </div>
                        <div className="text-[#E2E8F0] text-3xl">
                          <RiCloseLargeLine onClick={()=> handleDeleteitme(card)} />
                        </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-center ">
                <button onClick={handleAllDelete} className="text-[#D82C20] border border-[#ED8C85] py-2 w-full  font-bold rounded-2xl">Remove All</button>
              </div>
        </div>
    )
}
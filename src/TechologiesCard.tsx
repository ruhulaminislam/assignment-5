
import { FaCheck, FaStar } from "react-icons/fa";
import type { TechnologiesDataProps } from "./TechnologiesData";
import { Bounce, toast } from "react-toastify";




export interface TechologiesCardProps {
   tecData:TechnologiesDataProps[]
   cardData:TechnologiesDataProps[]
   setCardData: React.Dispatch<React.SetStateAction<TechnologiesDataProps[]>>
}

const TechologiesCard = ({ tecData,cardData,setCardData }: TechologiesCardProps) => {
        
      const  handleCard=(data:TechnologiesDataProps)=>{
        
        const NewData=[...cardData,data]
          setCardData(NewData)
       
             
          toast.success('success full add ', {
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
        <div className="grid md:grid-cols-3 gap-3  ">
           
              {
                tecData.map((data:TechnologiesDataProps)=>{
              
                const isSelected=cardData.find((card)=>card.id ===data.id)
              
                  return(
                    <div key={data.id} className={ isSelected ? "border p-7 border-[#D94CAB] rounded-3xl" : "border p-7 border-[#E4E8EC] rounded-3xl"}>
                        <div className="flex justify-between items-center mb-3">
                          <img src={data.icon} alt="" className="h-[50px] w-[50px] object-contain"/>
                          <p className="bg-[#F0F9FF] text-[#0EA5E9] py-2 px-3 rounded-2xl">{data.badge}</p>
                          
                          </div> 
                        <div className="mb-2.5 ">
                          <h2 className="mb-2.5 font-bold text-[#0F172A]">{data.name}</h2>
                          <p className="max-w-[300px] text-[#64748B]">{data.description}</p>
                        </div>
                         <hr className="w-full border-[#E4E8EC]" />
                        <div className="flex justify-between items-center mb-2.5 pt-2">
                           <h4 className="bg-[#F4F7FA] py-1.5 px-2 rounded-[10px]">{data.category}</h4>
                           <h4 className="text-[#64748B]">{data.difficulty}</h4>
                            <h4 className=" flex gap-1 items-center justify-center text-[#334155] font-bold "><FaStar className=" text-[#FBBF24] text-[15px]" />{data.rating}</h4>
                        </div>
                       
                        <div className=" flex justify-center">
                           <button
  onClick={() => handleCard(data)}
    
    disabled={isSelected !==undefined}
  
  className={isSelected ? "bg-pink-50 text-[#D94CAB] py-2.5 rounded-2xl w-full flex justify-center  items-center gap-2":
    "bg-[#0A0F1D] text-[#FFFFFF] py-2.5 rounded-2xl w-full"
   }
    > {isSelected !==undefined  ?  <> <FaCheck /> Added to Stack</> :"Add to Stack"}</button>
                        </div>
                    </div>
                  )

                })
              }  
        </div>
    )
}

export default TechologiesCard;
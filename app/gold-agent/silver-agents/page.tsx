import Image from "next/image"
import MoneyIcon from "../../../public/money-icon.svg"
import ActionButton from "@/app/components/ActionButton"

{ 

}

const GoldAgents = () => {
  return (
   <div className="mt-4 mx-3 lg:mx-5 xl:mx-6">
      <div className="font-bold text-lg text-gray-100">Gold Agents</div>
      <div className="mt-3 bg-opacity-70 border border-black bg-[#E6E5E8] h-fit w-full rounded-md px-1.5">
        <div className="text-xs font-bold mt-2 text-center flex justify-between items-center uppercase">
          <div className="min-w-[70px]">Actions</div>
          <div className="min-w-[70px]">Username</div>
          <div className="min-w-[70px]">Name</div>
          <div className="min-w-[70px]">Location</div>
          <div className="min-w-[70px]">Wallet</div>
        </div>
        <div className="mt-1 h-[2px] black-linear-vertical" />
         <div className="text-xs font-medium h-4 my-2 text-center flex justify-between items-center">
          <div className="min-w-[70px]">
            <ActionButton icon={MoneyIcon} />
          </div>
          <div className="min-w-[70px]">chansilveragent</div>
          <div className="min-w-[70px]">Chan Player</div>
          <div className="min-w-[70px]">Manila</div>
          <div className="min-w-[70px]">20,000</div>
          
        </div>
        <div className="text-xs font-medium h-4 my-2 text-center flex justify-between items-center">
          <div className="min-w-[70px]">
            <ActionButton icon={MoneyIcon} />
          </div>
          <div className="min-w-[70px]">chansilveragent</div>
          <div className="min-w-[70px]">Chan Player</div>
          <div className="min-w-[70px]">Manila</div>
          <div className="min-w-[70px]">20,000</div>
          
        </div>
        <div className="text-xs font-medium h-4 my-2 text-center flex justify-between items-center">
          <div className="min-w-[70px]">
            <ActionButton icon={MoneyIcon} />
          </div>
          <div className="min-w-[70px]">chansilveragent</div>
          <div className="min-w-[70px]">Chan Player</div>
          <div className="min-w-[70px]">Manila</div>
          <div className="min-w-[70px]">20,000</div>
        </div>
        <div className="text-xs font-medium h-4 my-2 text-center flex justify-between items-center">
          <div className="min-w-[70px]">
            <ActionButton icon={MoneyIcon} />
          </div>
          <div className="min-w-[70px]">chansilveragent</div>
          <div className="min-w-[70px]">Chan Player</div>
          <div className="min-w-[70px]">Manila</div>
          <div className="min-w-[70px]">20,000</div>
        </div>
      </div>
      
    </div>
  )
}

export default GoldAgents
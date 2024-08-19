"use client";
import {useRouter} from "next/navigation";
import Link from "next/link";

interface CardDownlineProps {
    title: string,
    registered: string,
    to: string
}

const CardDownline = ({ title,  registered, to }: CardDownlineProps) => {
    const router = useRouter()
  return (
      <div className="mt-3 bg-opacity-70 border border-black bg-[#E6E5E8] w-full h-28 rounded-md px-1.5">
        <div className="text-xs font-semibold mt-2 text-center">{ title }</div>
        <div className="mt-1 h-[2px] black-linear-vertical" />
        <div className="text-xs w-full mt-3 font-bold flex justify-between">
          <div className="font-semibold">Invite Code for Gold Agent</div>
          <div>Registered: {registered}</div>
        </div>
        <div className="flex justify-center mt-3">
          <Link href={to} target="_blank" className="main w-1/2  text-xs font-bold h-[30px] flex justify-center items-center rounded-lg border border-black">
            Copy Link
          </Link>
        </div>
      </div>
  )
}

export default CardDownline;
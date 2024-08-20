interface CardProps  {
    title: string,
    amount: string
}

const Card = ({ title,  amount }: CardProps) => {
  return (
      <div className="card bg-opacity-70 border border-black bg-[#E6E5E8] w-full h-24 rounded-md px-1.5">
          <div className="text-xs font-semibold mt-2 text-center">{ title }</div>
          <div className="mt-1 h-[2px] black-linear-vertical" />
          <div className="text-xs text-end mt-3 font-bold"><span className="mr-1 text-[9px]">₱</span>{ amount }</div>
        </div>
  )
}

export default Card;
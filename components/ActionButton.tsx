import Image from "next/image"
interface ActionButtonProps {
    text: string,
    variant: string
}
const ActionButton = ({ text, variant="admin" }: ActionButtonProps) => {
  return (
    <button className={`btn-primary-${variant} border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold`}>
        {text}
    </button>
  )
}

export default ActionButton;
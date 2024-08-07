import Image from "next/image"

const ActionButton = ({ icon }) => {
  return (
    <button className="border border-black p-[2px] main rounded-sm">
      <Image src={icon} alt="" />
    </button>
  )
}

export default ActionButton;
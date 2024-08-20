import {ReactNode} from "react";

interface ActionIconButton {
  icon: ReactNode,
  variant: string
}
const ActionIconButton = ({ icon, variant="admin" }:ActionIconButton) => {
  return (
    <button className={`btn-primary-${variant} border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold`}>
        {icon}
    </button>
  )
}

export default ActionIconButton;
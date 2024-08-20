import { useRouter } from "next/navigation";

interface CustomButtonProps {
  text: string,
  variant: string
}

const CustomButton = ({text, variant}: CustomButtonProps) => {
  return (
    <button type="submit"  className={`btn-primary-${variant} border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold`}>
      {text}
    </button>
  )
}

export default CustomButton;
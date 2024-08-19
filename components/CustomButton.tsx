import { useRouter } from "next/navigation";

interface CustomButtonProps {
  text: string,
  variant: string
}

const CustomButton = (props) => {
  return (
    <button type="submit" {...props}  className={`btn-primary-${props.variant} border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold`}>
      {props.text}
    </button>
  )
}

export default CustomButton;
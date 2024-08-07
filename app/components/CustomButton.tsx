import { useRouter } from "next/navigation";

const CustomButton = ({ text, link }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(link)}  className="h-10 rounded-xl w-1/3 bg-gradient-to-t border-2 border-another from-[#24242E] text-another text-sm to-[#131217]">
      {text}
    </button>
  )
}

export default CustomButton;
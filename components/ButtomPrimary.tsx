import {useRouter} from "next/navigation";

interface ButtomPrimaryProps {
    text: string,
    variant: string,
}

const ButtomPrimary = ({ text, variant = "gold"}: ButtomPrimaryProps) => {
    const router = useRouter();
    return (
        <button type="submit" className={`btn-primary-${variant} border-2 border-black ${text == "" ? "px-2" : "px-9"} py-2 rounded-md text-xs text-black font-semibold`}>
            {text}
        </button>
    )
}

export default ButtomPrimary
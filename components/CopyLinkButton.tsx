import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";

const CopyLinkButton = ({id, variant="admin", link="platinum-agent"}: {id: string, variant: string, link: string}) => {
    const url = `https://www.themaverickscard.tech/${link}/signup/${id}`
    const [isCopied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(() => setCopied(true));
    }

    return (
        <div className="flex w-1/2 max-w-sm items-center space-x-2">
            <Input className="text-xs border border-black" type="text" readOnly value={url}  />
            <Button onClick={handleCopy} className={`btn-primary-${variant} border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold`} type="submit" disabled={isCopied}>{isCopied ? "Copied" : "Copy"}</Button>
        </div>
    )
}

export default CopyLinkButton
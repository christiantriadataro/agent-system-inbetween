import {ReactNode} from "react";

const CustomInputGroup = ({children}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <div className="flex w-full gap-2">
            {children}
        </div>
    )
}

export default CustomInputGroup
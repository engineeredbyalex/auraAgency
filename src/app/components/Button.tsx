import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "solid" | "solid_dark" | "outline_dark" | "solid_light" | "outline_light";
}

export default function Button({ children, variant = "solid", ...rest }: ButtonProps) {
    let buttonClassName = "w-[15rem] h-[3rem] text-center flex items-center justify-center px-3 py-2";

    // Add styles based on variant
    switch (variant) {
        case "solid":
            buttonClassName += "bg-[#f0f0f0] text-[#333333] hover:bg-[#dddddd] hover:text-[#333333] transition-all ease-in-out  duration-[0.25s]";
            break;
        case "solid_dark":
            buttonClassName += "bg-[#000] text-[#fff] bg-[#000] hover:bg-[#E83D00] hover:text-[#fff] transition-all ease-in-out duration-[0.25s]";
            break;
        case "outline_dark":
            buttonClassName += " text-[#000] border-solid border-[0.2rem] border-black  hover:bg-[#000] hover:text-[#fff] transition-all ease-in-out  duration-[0.25s]";
            break;
        case "solid_light":
            buttonClassName += "bg-[#FDFCED] text-[#595959]";
            break;
        case "outline_light":
            buttonClassName += "border-[0.2rem] border-[#FDFCED] text-[#FDFCED] hover:bg-[#FDFCED] hover:text-[#595959] transition-all ease-in-out  duration-[0.25s]";
            break;
        default:
            break;
    }

    return <button className={buttonClassName} {...rest}><h5 className="uppercase">{children}</h5></button>;
}

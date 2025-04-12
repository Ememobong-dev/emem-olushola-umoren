import React from 'react';


type Variant = "bordered" | "fill";

interface ButtonProps {
    text: string;
    variant: Variant
}

export const Button: React.FC<ButtonProps> = ({text, variant}) => {
    const baseClasses = "rounded-full font-azeret-mono py-1 px-3 3xl:py-2 3xl:px-8 border";
    const variantClasses =
      variant === "bordered"
        ? "border border-white bg-transparent text-white"
        : "bg-white text-black";
  
    return (
      <button className={`${baseClasses} ${variantClasses}`}>
        {text}
      </button>
    );
  };

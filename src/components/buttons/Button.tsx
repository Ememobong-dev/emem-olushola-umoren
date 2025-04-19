import Link from "next/link";
import React from "react";

type Variant = "bordered" | "fill";

interface ButtonProps {
  text: string;
  variant: Variant;
  link?: string;
  target?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, variant, link, target }) => {
  const variantClasses =
    variant === "bordered"
      ? "border border-white bg-transparent text-white"
      : "bg-white text-black hover:border hover:bg-transparent hover:border-white hover:text-progress-cyan";

  return (
    <button
      className={` flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8  ${variantClasses} `}
    >
      {link ? <Link className="hover:!text-progress-cyan hover:font-semibold" target={target ? "_blank" : ""} href={link}> {text} </Link> : <p>{text}</p>}
    </button>
  );
};

import React from "react";

export const Button = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: string;
}) => {
  const nestedVariantCondition =
    variant === "red"
      ? "bg-pepper-red text-white"
      : variant === "yellow"
      ? "bg-sharp-yellow text-black"
      : variant === "blue"
      ? "bg-blue text-white"
      : variant === "cyan"
      ? "bg-cyan text-black"
      : "bg-transparent";

  return (
    <button
      className={`rounded-full font-azeret-mono py-1 px-3 3xl:py-2 3xl:px-8 ${nestedVariantCondition} `}
    >
      {children}
    </button>
  );
};

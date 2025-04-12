import React from 'react'

export const TagButton = ({text} : {text: string}) => {
    const baseClasses = "rounded-full text-sm text-white/30 font-azeret-mono  flex justify-center items-center bg-dark py-2 px-3 3xl:py-2 3xl:px-8 border";

  return (
    <button className={`${baseClasses}`}>
    {text}
  </button>
  )
}

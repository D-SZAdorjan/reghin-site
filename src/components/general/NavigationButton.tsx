import React from 'react'

const NavigationButton = ({ children, buttonIdentifier }: Readonly<{ children: React.ReactNode; buttonIdentifier: string }>) => {
  return (
    <button className={`flex justify-center items-center shrink-0 w-16 h-16 rounded-full bg-white text-center text-base font-medium border border-transparent transition duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:bg-indigo-950 hover:text-white ${buttonIdentifier}`}>
        {children}
    </button>
  )
}

export default NavigationButton
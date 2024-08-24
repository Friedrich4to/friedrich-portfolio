'use client'

import { useEffect, useState } from "react"

export function DarkModeBTN(){

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(false)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return(
        <button 
        className={`group transition-all py-2 px-2 w-fit text-sm rounded-lg border border-negro text-negro flex gap-2 items-center hover:bg-negro`}
        onClick={() => setDarkMode(!darkMode)}
        >
        <div className={`bg-negro group-hover:bg-blanco rounded transition-all duration-700 ${darkMode ? 'w-0 h-0' : 'w-5 h-5'}`}></div>
        <span className={`transition-all group-hover:text-blanco `}>{darkMode ? 'Light' : 'Dark'}</span>
        <div className={`bg-negro group-hover:bg-blanco rounded transition-all duration-700 ${darkMode ? 'w-5 h-5' : 'w-0 h-0'}`}></div>
      </button>
    )
}
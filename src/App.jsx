import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./Context/Theme"
import ThemeBtn from "./Component/ThemeBtn";
import Cards from "./Component/Cards";

import contextApi from './assets/contextApi.webp';

function App() {
  const [themeMode,setThemeMode]=useState("light");
  const lightMode=()=>{
    setThemeMode("light")
  }
  const darkMode=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light");
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center bg-no-repeat object-cover bg-center" style={{background:`url(${contextApi})`}} >
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Cards/>
            </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App

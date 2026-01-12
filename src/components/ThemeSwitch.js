import React, { useEffect, useState } from 'react'
import useAppStateContext from "../hooks/useAppStateContext";



export default function ThemeSwitch() {
    const { dispatch, isDarkMode } = useAppStateContext();

    

    useEffect(() => {
        console.log("Dark Mode",isDarkMode)
    }, [isDarkMode])


    const switchTheme = () => {
        console.log("Theme switch")
        
        if(isDarkMode){
            dispatch({
            type : 'SwitchLight'
        })
        }else{
            dispatch({
            type : 'SwitchDark'
        })
        }
        

    
    // const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))
    // localStorage.setItem('isDarkMode', !isDarkMode)

    // switchDark(isDarkMode)
  }
  return (
    <div className='theme-wrapper'>
        <label>Switch to {isDarkMode ? "Dark" : "Light"} </label>
        <input type="checkbox"  value={ isDarkMode ? true: false} onChange={switchTheme} />
    </div>
  )
}

"use client"
import { Sun, Moon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

export const LightModeBtn = ({className}: {className?: string}) => {

  const [light, setLight] = useState<boolean>()

  useEffect(() => {
    setLight(window.localStorage.getItem('light') ? true : false)
  }, [])

  useEffect(() => {
    console.log(light)
    if (light) {
      document.getElementById('body')?.classList.add('light')
      window.localStorage.setItem('light', 'true')
    } else {
      document.getElementById('body')?.classList.remove('light')
      window.localStorage.removeItem('light')
    }
  }, [light])

  return (
    <button onClick={e => setLight(!light)} className={'flex flex-col items-center justify-center settings-btn ' + className} >
      {/* {light ? "D" : "L"} */}
      { light ? <Moon /> : <Sun /> }
    </button>
  )
}

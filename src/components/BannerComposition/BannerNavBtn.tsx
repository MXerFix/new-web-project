"use client"
import { NavMenuBtnType } from '@/types'
import { MousePointerClickIcon } from 'lucide-react'
import React, { useState } from 'react'

export const BannerNavBtn = ({ className, isOpen, onClick }:NavMenuBtnType) => {

  const [light, setLight] = useState(false)

  return (
    <button onMouseEnter={e => {setLight(light => !light)}} onMouseLeave={e => setLight(prev => !prev)} onClick={e => onClick()} className={className + ` nav-menu-btn ${isOpen ? "nav-menu-btn-opened" : ""}`}>
      <MousePointerClickIcon className='transition-all duration-500' stroke={light ? "var(--foreground-def)" : "var(--background-def)"}  />
    </button>
  )
}

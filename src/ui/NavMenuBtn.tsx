import { NavMenuBtnType } from '@/types'
import React from 'react'

export const NavMenuBtn = ({ className, isOpen, onClick }:NavMenuBtnType) => {
  return (
    <button onClick={e => onClick()} className={className + ` nav-menu-btn ${isOpen ? "nav-menu-btn-opened" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

"use client"
import React, { useEffect, useState } from 'react'
import { SidebarBannerElement } from './Sidebar.Banner.Element'
import { SidebarBannerType } from '@/types'

export const SidebarBannerBlock = ({ children, title, delay }: SidebarBannerType) => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
      }, 5000 + (delay ? delay/5 : 0));
    }, 3000 + (delay ? delay : 0))
  }, [])

  return (
    <div className='banner-sidebar-block'>
      <button onClick={e => setIsOpen(prev => !prev)} className='banner-sidebar-block-btn'>
        {title}
      </button>
      <div className={`banner-sidebar-block-list ${isOpen ? "banner-sidebar-block-list-opened" : ""} `}>
        {children}
      </div>
    </div>
  )
}

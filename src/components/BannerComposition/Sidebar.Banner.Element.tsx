import { SidebarBannerElementType } from '@/types'
import React from 'react'

export const SidebarBannerElement = ({ children }: SidebarBannerElementType) => {
  return (
    <button className='banner-sidebar-element'>
      {children}
    </button>
  )
}

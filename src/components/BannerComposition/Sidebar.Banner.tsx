import React from 'react'
import { SidebarBannerBlock } from './Sidebar.Banner.Block'
import { SidebarBannerElement } from './Sidebar.Banner.Element'

export const SidebarBanner = () => {
  return (
    <div className='banner-sidebar z-10'>
      <SidebarBannerBlock delay={500} title='Products'>
        <SidebarBannerElement>Categories</SidebarBannerElement>
        <SidebarBannerElement>Prices</SidebarBannerElement>
        <SidebarBannerElement>Sells</SidebarBannerElement>
      </SidebarBannerBlock>
      <SidebarBannerBlock delay={1000} title='Services'>
        <SidebarBannerElement>Categories</SidebarBannerElement>
        <SidebarBannerElement>Prices</SidebarBannerElement>
        <SidebarBannerElement>Sells</SidebarBannerElement>
      </SidebarBannerBlock>
      <SidebarBannerBlock delay={1500} title='Entries'>
        <SidebarBannerElement>All windows</SidebarBannerElement>
        <SidebarBannerElement>Add new window</SidebarBannerElement>
        <SidebarBannerElement>Active users</SidebarBannerElement>
      </SidebarBannerBlock>
      <SidebarBannerBlock delay={2000} title='Actions'>
        <SidebarBannerElement>New action</SidebarBannerElement>
        <SidebarBannerElement>Active actions</SidebarBannerElement>
        <SidebarBannerElement>All actions</SidebarBannerElement>
      </SidebarBannerBlock>
    </div>
  )
}

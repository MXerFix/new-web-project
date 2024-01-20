import React from 'react'
import { NavMenu } from './NavMenu'
import { BannerHeader } from './BannerComposition/BannerHeader'
import { SidebarBanner } from './BannerComposition/Sidebar.Banner'
import { BannerChat } from './BannerComposition/Banner.Chat'
import { BannerMessage } from './BannerComposition/Banner.Message'

export const Banner = () => {
  return (
    <div className='  banner '>
      <BannerHeader />
      <SidebarBanner />
      <BannerChat className='absolute bottom-10 right-10' />
      <BannerMessage />
      <div className=' absolute bottom-3 w-full flex flex-col items-center justify-center '>
        <span className='w-max block text-neutral-500 bg-neutral-800 py-0.5 px-2 rounded text-sm '> demo banner </span>
      </div>
    </div>
  )
}

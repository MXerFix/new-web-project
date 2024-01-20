
import { Logo } from '@/svg/logo'
import React, { useState } from 'react'
import { NavMenu } from '../NavMenu'
import { BannerNav } from './BannerNav'

export const BannerHeader = () => {

  return (
    <div className='absolute top-0 flex flex-row items-center justify-between px-4 py-3 w-full max-h-[110px] bg-transparent '>
      <a className='text-4xl ml-8 banner-logo' href="http://localhost:3000">
        BUSINESS
      </a>
      <BannerNav />
    </div>
  )
}


import { Logo } from '@/svg/logo'
import React, { useState } from 'react'
import { NavMenu } from './NavMenu'

export const Header = () => {

  return (
    <div className='fixed top-0 z-50 flex flex-row items-center justify-between px-4 py-3 w-full h-max bg-transparent '>
      <a className='flex flex-row items-center justify-center gap-2 text-3xl' href="/">
        <Logo className='w-20 h-20' />
        <span className=' mix-blend-difference text-foreground bg-background px-2 py-1 rounded-lg '>
          WEB-PROJECT
        </span>
      </a>
      <NavMenu />
    </div>
  )
}

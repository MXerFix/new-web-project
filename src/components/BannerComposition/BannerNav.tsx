"use client"
import { LangBtn } from '@/ui/LangBtn'
import { LightModeBtn } from '@/ui/LightModeBtn'
import { NavMenuBtn } from '@/ui/NavMenuBtn'
import { NavMenuType } from '@/types'
import { contentText } from '@/ui/LangBtn'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { BannerNavBtn } from './BannerNavBtn'

export const BannerNav = ({ className }: NavMenuType) => {

  const [isNavMenu, setIsNavMenu] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsNavMenu(true)
    }, 3000);
  }, [])

  const handleClick = () => {
    setIsNavMenu(prev => !prev)
  }

  useEffect(() => {
    console.log(isNavMenu)
  }, [isNavMenu])


  return (
    <div className={className + ` flex flex-col items-end justify-end gap-2 ${!isNavMenu ? "nav-menu-closed" : ""} banner-nav relative z-10 top-14 `}>
      <div className='relative flex flex-col justify-center items-center nav-btns-block'>
        <BannerNavBtn className='z-20' onClick={handleClick} isOpen={isNavMenu} />
        <span className='shadow-block'></span>
        {/* <LightModeBtn className='z-10 absolute top-0' />
        <LangBtn className='z-10 absolute top-0' /> */}
      </div>
      {/* <Link className='nav-menu-link' href={'/'}>
        <span>  </span>
      </Link> */}
      <Link className='nav-menu-link' href={'/contacts'}>
        <span> Your own business </span>
      </Link>
      <Link className='nav-menu-link' href={'/contacts'}>
        <span> Your own tasks </span>
      </Link>
      <Link className='nav-menu-link' href={'/contacts'}>
        <span> Your own categories </span>
      </Link>
    </div>
  )
}

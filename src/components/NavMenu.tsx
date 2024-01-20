"use client"
import { LangBtn } from '@/ui/LangBtn'
import { LightModeBtn } from '@/ui/LightModeBtn'
import { NavMenuBtn } from '@/ui/NavMenuBtn'
import { NavMenuType } from '@/types'
import { contentText } from '@/ui/LangBtn'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

export const NavMenu = ({ className }: NavMenuType) => {

  const [isNavMenu, setIsNavMenu] = useState(false)

  const handleClick = () => {
    setIsNavMenu(prev => !prev)
  }

  useEffect(() => {
    console.log(isNavMenu)
  }, [isNavMenu])


  return (
    <div className={className + ` flex flex-row items-center justify-center gap-2 ${!isNavMenu ? "nav-menu-closed" : ""} `}>
      <Link className='nav-menu-link' href={'/'}>
        <span> {contentText().navMenu.home} </span>
      </Link>
      <Link className='nav-menu-link' href={'/projects'}>
        <span> {contentText().navMenu.projects} </span>
      </Link>
      <Link className='nav-menu-link' href={'/technologies'}>
        <span> {contentText().navMenu.technologies} </span>
      </Link>
      <Link className='nav-menu-link' href={'/contacts'}>
        <span> {contentText().navMenu.contacts} </span>
      </Link>
      <Link className='nav-menu-link' target='_blank' href={'https://web-project-studio.ru/'}>
        <span> Old </span>
      </Link>
      <div className='relative flex flex-col justify-center items-center'>
        <NavMenuBtn className='z-20' onClick={handleClick} isOpen={isNavMenu} />
        <span className='shadow-block'></span>
        <LightModeBtn className='z-10 absolute top-0' />
        <LangBtn className='z-10 absolute top-0' />
      </div>
    </div>
  )
}

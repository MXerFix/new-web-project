"use client"
import { MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'

export const BannerChat = ({ className }: { className: string }) => {

  const [light, setLight] = useState(false)

  return (
    <button onMouseEnter={e => setLight(true)} onMouseLeave={e => setLight(false)} className={' bg-foreground w-12 h-12 z-10 flex items-center justify-center rounded-xl hover:bg-background transition-all duration-500 banner-chat ' + className}>
      <MessageCircleIcon className='transition-all duration-500' stroke={light ? "var(--foreground-def)" : "var(--background-def)"} />
    </button>
  )
}

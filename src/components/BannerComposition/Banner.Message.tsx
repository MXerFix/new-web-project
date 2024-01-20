import React from 'react'

export const BannerMessage = () => {
  return (
    <div className='flex flex-col gap-4 z-[1] items-center justify-center text-foreground absolute w-full h-full bottom-0 '>
      <h2 className='banner-title text-7xl z-50 '>WEB-PROJECT</h2>
      <p className='banner-description text-3xl z-50 '>CUSTOMIZE YOUR BUSINESS</p>
    </div>
  )
}

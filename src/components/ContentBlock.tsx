"use client"
import { ContentBlockType } from '@/types'
import React, { forwardRef } from 'react'

export const ContentBlock = forwardRef(({ children, full = false, className, id, ...props }: ContentBlockType, ref: any) => {
  return (
    <div {...props} ref={ref} id={id} className={` content-block ${full && 'content-block-full'} ${className} `}>
      {children}
    </div>
  )
})

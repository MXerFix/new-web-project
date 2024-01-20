import { SVGIconType } from '@/types'
import React from 'react'

export const Moon = ({ className, width = '18', height = '18' }: SVGIconType) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
      <path d="M17.1267 11.5017C16.136 11.9146 15.0732 12.1265 14 12.125C9.5125 12.125 5.875 8.48752 5.875 4.00002C5.875 2.89169 6.09667 1.83585 6.49833 0.873352C5.01789 1.49095 3.75331 2.53281 2.86386 3.86773C1.9744 5.20265 1.49986 6.77092 1.5 8.37502C1.5 12.8625 5.1375 16.5 9.625 16.5C11.2291 16.5002 12.7974 16.0256 14.1323 15.1362C15.4672 14.2467 16.5091 12.9821 17.1267 11.5017Z" stroke="black" strokeOpacity="0.7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

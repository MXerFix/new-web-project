"use client"
import { useMotionValue, useSpring, motion, SpringOptions } from 'framer-motion'
import React, { Ref, useCallback, useEffect, useRef, useState } from 'react'

export const Cursor2 = ({ }: { cursorRef?: any[] }) => {

  const [cursorVariant, setCursorVariant] = useState("default")
  // const [currentRef, setCurrentRef] = useState(cursorRef[0])
  const [currRefIDX, setCurrRefIDX] = useState<number>(-1)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [remMousePos, setRemMousePos] = useState<any>({})
  const mousePos = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const smoothOptions: SpringOptions = { damping: 25, stiffness: 300, mass: 0.9 }
  const smoothMouse = {
    x: useSpring(mousePos.x, smoothOptions),
    y: useSpring(mousePos.y, smoothOptions)
  }

  // const [rectState, setRectState] = useState(currentRef?.current?.getBoundingClientRect())
  // const rect: DOMRect = currentRef?.current?.getBoundingClientRect();
  const cursorSizeX = 20
  const cursorSizeY = 20

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    // const center = { x: rectState?.left + rectState?.width / 2, y: rectState?.top + rectState?.height / 2 }
    // if (isHovered) {
    //   mousePos.x.set(center.x - cursorSizeX / 2);
    //   mousePos.y.set(center.y - cursorSizeY / 2);
    // } else {
    mousePos.x.set(e.clientX - cursorSizeX / 2)
    mousePos.y.set(e.clientY - cursorSizeY / 2)
    // }
  }, [isHovered, cursorSizeX, cursorSizeY])


  // const mouseOverHandler = (e: MouseEvent | any) => {
  //   if (cursorRef.some(({ current }) => current.id === e.target.id)) {
  //     setRemMousePos({ x: e.clientX - cursorSizeX, y: e.clientY - cursorSizeY })
  //     setCurrentRef({ current: e.target })
  //     setRectState(e.target.getBoundingClientRect())
  //     setIsHovered(prev => true)
  //   }
  // }

  const mouseLeaveHandler = (e: MouseEvent) => {
    setIsHovered(prev => false)
  }

  // console.log(cursorVariant)

  useEffect(() => {
    window.onscroll = () => {
      if (isHovered) {
        setIsHovered(false)
        mousePos.x.set(remMousePos.x);
        mousePos.y.set(remMousePos.y);
      }
    }
    // currentRef.current.addEventListener("mouseover", mouseOverHandler)
    // currentRef.current.addEventListener("mouseleave", mouseLeaveHandler)
    // cursorRef.map((cursorRef: any, idx: number) => {
    //   cursorRef?.current?.addEventListener("mouseover", mouseOverHandler)
    //   cursorRef?.current?.addEventListener("mouseleave", mouseLeaveHandler)
    // })
    window.addEventListener("mousemove", mouseMoveHandler)
    return () => {
      // cursorRef.map((cursorRef: any, idx: number) => {
      //   cursorRef?.current?.removeEventListener("mouseover", mouseOverHandler)
      //   cursorRef?.current?.removeEventListener("mouseleave", mouseLeaveHandler)
      // })
      window.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [isHovered, cursorSizeX, cursorSizeY])


  return (
    <motion.div
      className="cursor z-[100]"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={isHovered ? { width: cursorSizeX, height: cursorSizeY, borderRadius: '24px' } : { width: cursorSizeX, height: cursorSizeY, borderRadius: '50%' }}
    // variants={variants}
    // animate={cursorVariant}
    // transition={{type: "tween", ease: "backOut"}}
    />
  )
}

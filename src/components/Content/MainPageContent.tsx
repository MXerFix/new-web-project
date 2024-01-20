"use client"
import { Banner } from "@/components/Banner";
import { ContentBlock } from "@/components/ContentBlock";
import { ReactElement, ReactNode, Ref, RefObject, Suspense, createRef, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Cursor } from "@/components/Cursor";
import { Atom, BarChartBig, Clock, Contact, GanttChartSquare, Kanban, Mail, MapPin, Package, SendHorizonal } from "lucide-react";
import { BiLogoReact, BiLogoVuejs, BiLogoFigma } from 'react-icons/bi'
import { SiNextdotjs, SiRedux, SiVite, SiWebpack } from 'react-icons/si'
import { PiFileSqlFill, PiTelegramLogoFill, PiWhatsappLogoFill } from 'react-icons/pi'
import { Cursor2 } from "@/components/Cursor2";
import * as Tooltip from '@radix-ui/react-tooltip';
import ShadTooltip from "@/ui/ShadTooltip";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import { Header } from "../Header";
import Footer from "../Footer";



export default function HomeLazy() {


  const content: { id: string, ref: any, inner: ReactNode, full?: boolean }[] = [
    {
      id: 'e-commerce',
      ref: createRef(),
      inner:
        <>
          <h3 className=" e-commerce-title "> <span className=" e-commerce-span ">E</span>-Commerce</h3>
          <div className=" e-commerce-div ">
            <p className=" e-commerce-div-p "> Sale </p>
            <p className=" e-commerce-div-p "> Control </p>
            <p className=" e-commerce-div-p "> Multiply </p>
            <p className=" e-commerce-div-p "> Enjoy </p>
          </div>
        </>
    },
    {
      id: 'business-instruments',
      ref: createRef(),
      inner:
        <>
          <h3 className=" business-title "> Business <Kanban className=" w-[4.5rem] h-[4.5rem] " /> </h3>
          <div className="business-p flex flex-col items-center justify-center">
            Tools for your own control
            <div className="flex flex-row items-center justify-center gap-2 mt-2">
              <BarChartBig className="bg-foreground text-bgsecondary w-8 h-8 p-1 rounded-lg" />
              <Mail className="bg-foreground text-bgsecondary w-8 h-8 p-1 rounded-lg" />
              <MapPin className="bg-foreground text-bgsecondary w-8 h-8 p-1 rounded-lg" />
              <Clock className="bg-foreground text-bgsecondary w-8 h-8 p-1 rounded-lg" />
            </div>
          </div>
        </>
    },
    {
      id: 'technologies',
      ref: createRef(),
      inner:
        <>
          <h3 className=" tech-title "> The most effective and popular technologies <Atom className="w-12 h-12" /> </h3>
          <div className=" tech-icons-div ">
            <a target="_blank" href="https://react.dev">
              <BiLogoReact className=" tech-icon " />
            </a>
            <a target="_blank" href="https://vuejs.org/">
              <BiLogoVuejs className=" tech-icon " />
            </a>
            <a target="_blank" href="https://nextjs.org/">
              <SiNextdotjs className=" tech-icon " />
            </a>
            {/* <a target="_blank" href="">
              <SiRedux className=" tech-icon " />
            </a> */}
            <a target="_blank" href="https://www.mysql.com/">
              <PiFileSqlFill className=" tech-icon " />
            </a>
            <a target="_blank" href="https://vitejs.dev/">
              <SiVite className=" tech-icon " />
            </a>
            <a target="_blank" href="https://webpack.js.org/">
              <SiWebpack className=" tech-icon " />
            </a>
            <a target="_blank" href="https://www.figma.com/">
              <BiLogoFigma className=" tech-icon " />
            </a>
          </div>
        </>,
      full: true
    },
    {
      id: 'projects',
      ref: createRef(),
      inner:
        <>
          <h3 className=" projects-title ">
            <p>Projects</p>
            <Package className=" projects-title-icon " />
          </h3>
          <div className=" projects-div ">
            <div className=" projects-outside-div ">
              <a id="syncsound" className=" projects-a-item " href=""> syncsound </a>
              <a id="wps" className=" projects-a-item " href=""> web-project-studio </a>
            </div>
            <div className=" projects-center-div ">
              <a id="leepy" className=" projects-a-item " href=""> leepy-design </a>
              <a id="avtomix" className=" projects-a-item " href=""> avtomix27 </a>
            </div>
            <div className=" projects-outside-div ">
              <a id="lash-lers" className=" projects-a-item " href=""> lash-lers </a>
              <a id="webp-eco" className=" projects-a-item " href=""> webp-eco </a>
            </div>
          </div>
        </>
    },
    {
      id: 'contacts',
      ref: createRef(),
      inner:
        <>
          <h3 className=" contacts-title "> Contacts <SendHorizonal className=" w-20 h-20 p-1 rounded-xl mt-4 ml-2 bg-foreground text-background " /> </h3>
          <div className=" contacts-div ">
            <PiTelegramLogoFill className="contacts-icon" />
            <PiWhatsappLogoFill className="contacts-icon" />
            <Mail className="contacts-icon" />
          </div>
        </>
    },
  ]

  const cursorRef = content.map(({ ref }) => ref)
  console.log(cursorRef)

  return (
    <div className="no-cursor">
      <Header />
      <main className=" px-[2%] ">
        {/*<Cursor cursorRef={cursorRef} />*/}
        {/*<Cursor2 />*/}
        <Banner />
        <div className=" flex flex-row items-center justify-start gap-[2%] gap-y-[2vw] flex-wrap pb-12">
          {content.map((block) => {
            if (block.id === 'e-commerce' || block.id === 'business-instruments') {
              return (
                <Link key={block.id} className={` ${block.full ? "w-full" : "w-[49%]"} h-max `} href={`/demo/${block.id}`}>
                  <ContentBlock key={block.id} id={block.id} ref={block.ref} full={block.full} >
                    {block.inner}
                  </ContentBlock>
                </Link>
              )
            } else {
              return (
                <div key={block.id} className={` ${block.full ? "w-full" : "w-[49%]"} h-max `}>
                  <ContentBlock key={block.id} id={block.id} ref={block.ref} full={block.full} >
                    {block.inner}
                  </ContentBlock>
                </div>
              )
            }
          })}
        </div>
      </main>
      <Footer />
      <Cursor2 />
    </div>
  )
}

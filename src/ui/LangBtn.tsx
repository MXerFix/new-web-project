"use client"
import { Sun, Moon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

export const LangBtn = ({ className }: { className?: string }) => {

  const [lang, setLang] = useState<boolean>()

  useEffect(() => {
    setLang(window.localStorage.getItem('language') == 'ru' ? true : false)
  }, [])

  const handleClick = () => {
    setLang(!lang)
    location.reload()
  }

  useEffect(() => {
    if (lang) {
      window.localStorage.setItem('language', 'ru')
    } else {
      window.localStorage.setItem('language', 'en')
    }
  }, [lang])

  return (
    <button onClick={handleClick} type='button' className={'flex flex-col items-center justify-center settings-btn ' + className} >
      {/* {light ? "D" : "L"} */}
      {lang ? "EN" : "RU"}
    </button>
  )
}


export const contentText = () => {

  const [lang, setLang] = useState<boolean>()

  useEffect(() => {
    setLang(window.localStorage.getItem('language') == 'ru' ? true : false)
  }, [])

  useEffect(() => {
    setLang(window.localStorage.getItem('language') == 'ru' ? true : false)
  }, [lang])

  return {
    navMenu: {
      home: lang ? 'Главная' : 'Home',
      projects: lang ? 'Проекты' : 'Projects',
      technologies: lang ? 'Технологии' : 'Technologies',
      contacts: lang ? 'Контакты' : 'Contacts',
    },
    contacts: {
      title: lang ? 'Контакты' : 'Contacts',
    },
    e_commerce: {
      block_items: {
        1: lang ? "Продавай" : "Sale",
        2: lang ? "Контролируй" : "Control",
        3: lang ? "Преумножай" : "Multiply",
        4: lang ? "Получай удовольствие" : "Enjoy",
      }
    }
  }
}

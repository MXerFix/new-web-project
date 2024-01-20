"use client"
import { mock_devices } from '@/mocks/devices'
import { Search, ShoppingBag, ShoppingBasket } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { BiBasket } from 'react-icons/bi'
import ProductCard from '../ProductCard'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Link from 'next/link'

const ECommerce = () => {

  return (
    <>
      <div className='e-commerce-wrapper'>
        <header className='e-commerce-header'>
          <h4>Demo store</h4>
          <button className='e-commerce-header-cart-button'>
            <ShoppingBasket strokeWidth={1.5} className={'e-commerce-header-cart-icon'} />
          </button>
        </header>
        <div className='e-commerce-main'>
          <div className='e-commerce-device-box'>
            {mock_devices.map((device) => (
              <ProductCard key={crypto.randomUUID()} product={device} variant='medium' />
            ))}
            {mock_devices.map((device) => (
              <ProductCard key={crypto.randomUUID()} product={device} variant='small' />
            ))}
            {mock_devices.map((device) => (
              <ProductCard key={crypto.randomUUID()} product={device} variant='small' />
            ))}
          </div>
        </div>
        <footer className='e-commerce-footer'>

        </footer>
      </div>
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="bg-[#00000020] data-[state=open]:animate-overlayShow fixed inset-0 z-50 " />
          <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <AlertDialog.Title className="text-foreground m-0 text-[17px] font-medium">
              Уведомление о демонстрации!
            </AlertDialog.Title>
            <AlertDialog.Description className="text-foreground mt-4 mb-5 text-[15px] leading-normal">
              <p>Демонстрационный вариант не отражает конечного качества и внешнего вида продукта и предназначен только для ознакомления с его функциональными возможностями.</p>
              <p>Вы можете ознакомиться с ними, нажав на соответсвующую ссылку ниже!</p>
              <p>Все заказные проекты выполняются индивидуально.</p>
            </AlertDialog.Description>
            <div className="flex justify-end gap-[25px]">
              <Link href={'/'}>
                <button className="text-background bg-yellow-300 hover:bg-yellow-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                  К реальным проектам
                </button>
              </Link>
              <AlertDialog.Cancel asChild>
                <button className="text-background bg-green-300 hover:bg-green-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                  Понятно
                </button>
              </AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}

export default ECommerce
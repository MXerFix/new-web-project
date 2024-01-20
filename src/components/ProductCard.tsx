import { ProductCardType } from '@/types'
import Image from 'next/image'
import React from 'react'



const ProductCard = ({ variant = 'medium', product }: ProductCardType) => {
  return (
    <>
      <div className={`e-commerce-product-card e-commerce-product-card-${variant}`}>
        <div className='w-full flex flex-col items-center justify-center'>
          <Image src={product.img} alt='Phone 15' />
        </div>
        <div className=' e-commerce-product-card-pricebox flex flex-row items-center justify-between border border-border_no_accent rounded-xl p-2 '>
          <div className=' flex flex-col items-start justify-start '>
            <p className={`e-commerce-product-card-${variant}-name`} > {product.name} </p>
            {/* <p className={`e-commerce-product-card-${variant}-price`} > {product.configurations[0].price}₽ </p> */}
          </div>
          <span className={`e-commerce-product-card-button e-commerce-product-card-${variant}-button text-lg text-white rounded-lg px-2 py-1 bg-e_commerce_cart_btn `}>
            {product.configurations[0].price}₽
          </span>
          <button className={` e-commerce-product-card-buy-button e-commerce-product-card-buy-button-${variant} `} >
            Купить
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCard
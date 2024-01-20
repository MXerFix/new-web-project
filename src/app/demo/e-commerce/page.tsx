import Preloader from '@/components/Preloader'
import dynamic from 'next/dynamic'
import React from 'react'
import ECommerce from '../../../components/Content/ECommerce'

const page = () => {

  const Content = dynamic(() => import('../../../components/Content/ECommerce'), {
    loading: () => <Preloader />
  })


  return (
    <>
      <Content />
      {/* <ECommerce /> */}
    </>
  )
}

export default page
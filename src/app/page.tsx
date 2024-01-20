import Preloader from "@/components/Preloader";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";



export default function Home() {

  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000);
  // }, [])

  const Content = dynamic(() => import('../components/Content/MainPageContent'), {
    loading: () => <Preloader />
  })



  return (
    <>
      <Content />
    </>
  )
}

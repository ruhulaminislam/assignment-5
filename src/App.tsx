import { Navbar } from './Navbar'

import './App.css'
import { Hero } from './ Hero'
import type { TechnologiesDataProps } from './TechnologiesData'
import { Suspense, useState } from 'react'
import { Technologies } from './Technologies'

const TechnologieDataPromic=async():Promise<TechnologiesDataProps[]>=>{
  const rec=await fetch("/data.json")
  const data=await rec.json()
  return data
}


function App() {
const [technologiesData]=useState(()=>TechnologieDataPromic())

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
       <Suspense fallback={<h1>Loding...</h1>}>
      <Technologies  technologiesData={technologiesData}></Technologies>
     </Suspense>
    </>
  )
}

export default App

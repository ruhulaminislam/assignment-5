import { Navbar } from './Navbar'

import './App.css'
import { Hero } from './ Hero'
import type { TechnologiesDataProps } from './TechnologiesData'
import { useState } from 'react'
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
    </>
  )
}

export default App

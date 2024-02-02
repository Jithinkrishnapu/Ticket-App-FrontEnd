import React from 'react'
import Header from '../components/Header'
import ListView from '../components/MainBody/ListView'

export default function Home() {
  return (
    <div className='w-full lg:h-[100vh] relative lg:w-[60%] bg-white' >
        <Header/>
        <ListView/>
    </div>
  )
}

import React from 'react'
import Header from '../components/Header'
import ListView from '../components/MainBody/ListView'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className='w-full lg:h-[100vh] relative p-5 bg-white' >
        <Header/>
        <ListView/>
    </div>
  )
}

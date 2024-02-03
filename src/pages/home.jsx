import React from 'react'
import Header from '../components/Header'
import ListView from '../components/MainBody/ListView'
import Modal from '../components/Modal'
import useToggle from '../hooks/useToogler';

export default function Home() {

  const { on, toggler } = useToggle();

  return (
    <div className='w-full lg:h-[100vh] relative p-5 bg-white' >
        <Header toggler={toggler} />
        <ListView/>
       {on && <Modal toggler={toggler} />}
    </div>
  )
}

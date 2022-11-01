import React  from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const {OpenSideBar,OpenModal} = useGlobalContext();
  return <main>
    <button className='sidebar-toggle' onClick={OpenSideBar}><FaBars /></button>
    <button className='btn' onClick={OpenModal}>show modal</button>
  </main>
}

export default Home

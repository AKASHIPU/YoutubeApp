import React from 'react'
import {useSelector} from 'react-redux'

const SideBar = () => {
  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen){
    return null
  }
  return (
    <div className='shadow-lg p-5 w-48'>
        <ul>
            <li>Music</li>
            <li>Menu</li>
            <li>music</li>
            <li>Trending</li>

        </ul>
        <h2 className='font-bold'>Subscription</h2>
        <ul>
            <li>home</li>
            <li>Menu</li>
            <li>music</li>
            <li>Trending</li>

        </ul>
        <h2 className='font-bold'>Trending</h2>

        <ul>
            <li>Play</li>
            <li>Menu</li>
            <li>music</li>
            <li>Trending</li>

        </ul>
    </div>
  )
}

export default SideBar
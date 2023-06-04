import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen){
    return null
  }
  return (
    <div className='shadow-lg p-5 w-48'>
        <ul>
            <li><Link to='/'>Home </Link></li>
            <li>Menu</li>
            <li>music</li>
            <li>Trending</li>

        </ul>
        <h2 className='font-bold'>Subscription</h2>
        <ul>
        <li><Link to='/'>Home </Link></li>
            <li>Menu</li>
            <li>music</li>
            <li>Trending</li>

        </ul>
        <h2 className='font-bold'>Trending</h2>

        <ul>
            <li>Play</li>
            <li><Link to='/'>Home </Link></li>
            <li>music</li>
            <li>Trending</li>

        </ul>
    </div>
  )
}

export default SideBar
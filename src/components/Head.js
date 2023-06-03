import React from 'react'
import {useDispatch} from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

function Head() {

const dispatch=useDispatch();
const toggleMenuDispatch=()=>{
dispatch(toggleMenu())  
}
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
<img className='h-7 cursor-pointer' onClick={()=>toggleMenuDispatch()} alt='h-menu' src='https://www.clipartmax.com/png/middle/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png'/>
<a href='/'> <img className='h-8 mx-5' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
</a>
</div>
<div className='col-span-10 px-10'>
    <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='search here'/>
    < button className='p-2 border border-gray-400 rounded-r-full' >Search</button>
</div>
<div className='col-span-1'>
    <img className='h-12 cursor-pointer' alt='user-icon' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' />
</div>
    </div>
  )
}

export default Head
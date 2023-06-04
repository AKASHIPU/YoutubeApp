import React from 'react'

 const Button = ({name}) => {
  return (
    <div className='m-2 p-2 bg-gray-300 rounded-lg'>
        <button>{name}</button>
    </div>
  )
}
export default Button;

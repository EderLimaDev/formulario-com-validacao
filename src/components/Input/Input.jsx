import React from 'react'

export const Input = ({ control, name, errorMessage, ...rest}) => {
  return (
   <div className='w-full h-18 text-slate-100 border-2 border-green-600 rounded-3 overflow-hidden py-3'> 
      <input className='w-full h-11 rounded-3xl bg-transparent border-spacing-0 outline-none' type="text" />
      <p className='text-red-600 text-sm mt-2 ml-3'></p>
    </div>
  )
}

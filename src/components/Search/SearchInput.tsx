import React from 'react'

export const SearchInput = () => {
  return (
    <div className='w-1/2 flex gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black opacity-70">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input placeholder='Search...' type="text" className='caret-gray-400 text-black focus:outline-none' />
    </div>
  )
}

import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center items-center dark:bg-gray-600 p-4 bg-green-300 lg:text-lg'>
      <NavbarItem title="All" param="everything" />
      <NavbarItem title="Top Headline" param="top-headlines" />
    </div>
  )
}

import React from 'react'
import { HiOutlineLightBulb } from 'react-icons/hi'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex h-16 items-center justify-center text-4xl ">
      <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Trello Clone
      </h1>
      <HiOutlineLightBulb className='text-blue-500' />
    </header>
  )
}

export default Header

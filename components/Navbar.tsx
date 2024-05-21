import Image from 'next/image'
import React from 'react'

interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = ({}) => {
  return (
    <div className='flex h-20 items-center justify-center w-full '>
      <Image width={200} height={80} src="/logo-white.png" />
      
    </div>
  )
}

export default Navbar

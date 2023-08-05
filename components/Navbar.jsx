" use client";
import { use } from 'bcrypt/promises'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src= "/assets/images/logo.svg" width={30} height={30} alt='Promptopia Logo' className='object-contain'  />
            <p className='logo_text'>Promptopia</p>
        </Link>
    </nav>
  )
}

export default Navbar
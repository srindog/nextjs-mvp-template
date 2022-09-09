import React from 'react';
import Link from 'next/link';
import { NavbarLink } from './NavbarLink'
import { signOut } from 'next-auth/react';


interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-6xl  mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><a className="text-3xl font-semibold">Hippo</a></Link>
          <div className="text-lg flex space-x-20 text-gray-900">
            <NavbarLink title='About' href='#'/>
            <NavbarLink title='Log in' href='/api/auth/signin' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
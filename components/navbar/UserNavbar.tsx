import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { NavbarLink } from './NavbarLink'



interface UserNavbarProps {}

const UserNavbar: React.FC<UserNavbarProps> = ({}: UserNavbarProps) => {

  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><a className="text-3xl font-semibold">Hippo</a></Link>
          <div className="flex space-x-20 text-gray-900">
            <NavbarLink title='Profile' href='/my/profile' />
            <NavbarLink title='Log out' href="/api/auth/signout" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar;
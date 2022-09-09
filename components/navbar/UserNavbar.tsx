import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { NavbarLink } from './NavbarLink'



interface UserNavbarProps {}

const UserNavbar: React.FC<UserNavbarProps> = ({}: UserNavbarProps) => {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/"><a className="text-3xl font-semibold">Hippo</a></Link>
          <div className="flex flex-row space-x-20 items-center text-gray-900">
            <p className='flex flex-row items-center'>
              Signed in as:
              {session?.user?.image && <img className='h-10 rounded-full mx-2 shadow-md' src={session.user.image}/>} 
              {session?.user?.email}
            </p>
            <NavbarLink title='Profile' href='/my/profile' />
            <NavbarLink title='Log out' href="/api/auth/signout" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar;
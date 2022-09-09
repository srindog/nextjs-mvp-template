import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarLinkProps {
  title: string;
  href: string;
  className?: string;
  
}

const NavbarLink = ({ title, href, className }: NavbarLinkProps) => {
  const router = useRouter()
  const isActive = router.pathname === href;

  return (
    <div className={`text-lg p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 ${isActive && 'font-semibold'} ${className}`}>
      <Link href={href}><a>{title}</a></Link>
    </div>
  )
}

export {
  NavbarLink
}
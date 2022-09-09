import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import UserNavbar from '../navbar/UserNavbar';
import * as constants from '../../lib/constants';
import Loading from '../Loading';

interface AuthenticatedPageProps {
  children?: React.ReactNode;
}

function AuthenticatedPage({ children }: AuthenticatedPageProps) {
  const router = useRouter();
  const { status } = useSession();

  if (status === constants.UNAUTHENTICATED) {
    router.replace('/')
    return <></>;
  } else if (status === constants.LOADING) {
    return <Loading />
  }

  return (
    <div className='bg-white text-black'>
      <UserNavbar />
      {children}
    </div>
  )
}

export default AuthenticatedPage;
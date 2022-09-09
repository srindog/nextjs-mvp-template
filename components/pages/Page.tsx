import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from '../navbar/Navbar';
import * as constants from '../../lib/constants';
import Loading from '../Loading';

interface PageProps {
  children?: React.ReactNode;
}

function Page({ children }: PageProps) {
  const router = useRouter()
  const { status } = useSession();

  if (status === constants.AUTHENTICATED) {
    router.replace('/my/profile')
    return <></>;
  } else if (status === constants.LOADING) {
    return <Loading />
  }

  return (
    <div className='bg-white text-black'>
      <Navbar />
      {children}
    </div>
  )
}

export default Page;
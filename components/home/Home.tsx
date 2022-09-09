import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

interface HomeProps {
}

function Home({}: HomeProps) {
  const router = useRouter();
  const { data: session, status} = useSession();

  return (
    <div>
      HOME
    </div>
  )
}

export default Home
import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Page from '../pages/Page';

interface HomeProps {
}

function Home({}: HomeProps) {
  const router = useRouter();
  const { data: session, status} = useSession();

  return (
    <Page>
      <div>
        HOME
      </div>
    </Page>
    
  )
}

export default Home
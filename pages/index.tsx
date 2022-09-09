import type { NextPage } from 'next'
import Page from '../components/pages/Page';
import Home from '../components/home/Home';


export interface HomeProps {
  
}

const HomePage: NextPage<HomeProps> = ({}: HomeProps ) => {

  return (
    <Page>
      <Home />
    </Page>
  )
}

export default HomePage

import type { NextPage } from 'next'
import Home from '../components/home/Home';


export interface HomeProps {}

const HomePage: NextPage<HomeProps> = ({}: HomeProps) => <Home />

export default HomePage

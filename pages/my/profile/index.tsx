import type { NextPage } from 'next'
import Profile from '../../../components/user/Profile';


interface ProfileProps {}

const ProfilePage: NextPage<ProfileProps> = ({}: ProfileProps) => <Profile />

export default ProfilePage

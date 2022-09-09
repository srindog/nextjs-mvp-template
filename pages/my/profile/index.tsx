import type { NextPage } from 'next'
import AuthenicatedPage from '../../../components/pages/AuthenticatedPage';
import Profile from '../../../components/user/Profile';


interface ProfileProps {

}

const ProfilePage: NextPage<ProfileProps> = ({}: ProfileProps) => <Profile />

export default ProfilePage

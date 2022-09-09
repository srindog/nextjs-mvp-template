import React from 'react';
import AuthenticatedPage from '../pages/AuthenticatedPage';


interface ProfileProps {
}

function Profile({}: ProfileProps) {

  return (
    <AuthenticatedPage>
      <div>
        Profile
      </div>

    </AuthenticatedPage>

  )
}

export default Profile
// client/src/pages/Profile.js

import React from 'react';

const Profile = () => {
  // You can replace this with data from an API or state
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Professional athlete looking for sponsorship opportunities.'
  };

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {userProfile.name}</p>
      <p><strong>Email:</strong> {userProfile.email}</p>
      <p><strong>Bio:</strong> {userProfile.bio}</p>
    </div>
  );
};

export default Profile;

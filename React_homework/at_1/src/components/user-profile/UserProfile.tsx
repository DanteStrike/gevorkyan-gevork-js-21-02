import React from 'react';
import UserPreview from '../user-preview/UserPreview';
import UserPosts from '../user-posts/UserPosts';

function UserProfile() {
  return (
    <>
      <UserPreview />
      <UserPosts />
    </>
  );
}

export default UserProfile;

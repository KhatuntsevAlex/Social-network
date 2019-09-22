import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ isOwner }) => (
  <div>
    <ProfileInfo isOwner={isOwner} />
    <MyPosts />
  </div>
)

export default Profile

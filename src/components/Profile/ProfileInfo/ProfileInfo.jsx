import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../Users/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = ({ profile, status, updateStatus }) => {
  const contacts = Object.keys(profile.contacts)
    .map(
      key => (
        profile.contacts[key]
          ? <p><b>{key}: </b>{profile.contacts[key]}</p>
          : null
      )
    )
  if (!profile) return <Preloader />
  return (
    <div>
      <div>
        <img
          src={profile.photos.large}
          className={s.titleImage}
          alt="..."
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.small}
          className={s.ava}
          alt="..."
        />
        {profile.fullName ? <strong>{profile.fullName}</strong> : null}
        <ProfileStatus status={status} updateStatus={updateStatus} />
        {profile.aboutMe
          ? (
            <p>
              <b>Обо мне: </b>
              {profile.aboutMe}
            </p>
          )
          : null}
        {contacts}
        {profile.lookingForAJobDescription
          ? (
            <p>
              <b>Работа: </b>
              {profile.lookingForAJobDescription}
            </p>
          )
          : null
        }
      </div>
    </div>
  )
}

export default ProfileInfo

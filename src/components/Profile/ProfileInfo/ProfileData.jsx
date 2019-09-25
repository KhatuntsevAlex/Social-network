import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileData = ({
  profile,
  isOwner,
  setEditeMode,
}) => {
  const contacts = profile.contacts && Object.keys(profile.contacts)
    .map(key => profile.contacts[key] && <div key={`profileData_${key}`}><b>{key}: </b>{profile.contacts[key]}</div>)
  return <>
    {isOwner && <button type="button" onClick={() => { setEditeMode(true) }}>Edit</button>}
    {profile.fullName && <div><strong>Full name: <i>{profile.fullName}</i></strong></div>}
    {profile.aboutMe && <div><b>Обо мне: </b>{profile.aboutMe}</div>}
    <div><b>Ищу ли работу?: </b>{profile.lookingForAJob ? 'Да' : 'Нет'}</div>
    {profile.lookingForAJobDescription && <div><b>Работа мечты: </b>{profile.lookingForAJobDescription}</div>}
    <div><b>Contacts:</b> <div className={s.contacts}>{contacts}</div></div>
  </>
}

export default ProfileData

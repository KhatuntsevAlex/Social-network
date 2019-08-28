import React from 'react'
import { connect } from 'react-redux'
import { updateStatus } from '../../../redux/profile-reducer'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = React.memo(({ profile, status, ...funcs }) => {
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
        <ProfileStatus status={status} updateStatus={funcs.updateStatus} />
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
})

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

const mapDispatchToProps = {
  updateStatus,
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(ProfileInfo)

export default ProfileInfoContainer

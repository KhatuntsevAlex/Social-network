import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateStatus, updatePhoto, updateInfo } from '../../../redux/profile-reducer'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/userLogo.png'
import ProfilePhoto from './ProfilePhoto'
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm'
import s from './ProfileInfo.module.css'

const ProfileInfo = React.memo(({ profile, status, isOwner, ...funcs }) => {
  const [isEditeMode, setEditeMode] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [downloadFileBtnVisibility, setDownloadFileBtnVisibility] = useState(false)

  const onAvaPhotoSelect = (e) => {
    e.preventDefault()
    if (e.target.files.length) {
      funcs.updatePhoto(e.target.files[0])
    }
  }

  const onHandleSubmit = (data) => {
    setIsUpdating(true)
    funcs.updateInfo(data)
      .then(() => {
        setEditeMode(false)
        setIsUpdating(false)
      })
      .catch(() => {
        setIsUpdating(false)
      })
  }

  const cancelEditing = () => {
    setEditeMode(false)
  }

  if (!profile) return <Preloader />
  return (
    <div>
      <div>
        <img
          src={profile.photos.large || userPhoto}
          className={s.titleImage}
          alt="..."
        />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.photoPlusStatus}>
          <ProfilePhoto
            onMainPhotoSelect={onAvaPhotoSelect}
            small={profile.photos.small}
            isOwner={isOwner}
            userPhoto={userPhoto}
            downloadFileBtnVisibility={downloadFileBtnVisibility}
            setDownloadFileBtnVisibility={setDownloadFileBtnVisibility}
          />
          <ProfileStatus
            status={status}
            updateStatus={funcs.updateStatus}
            isOwner={isOwner}
          />
        </div>
        {profile && isEditeMode
          ? <ProfileDataForm
            initialValues={profile}
            profile={profile}
            setEditeMode={setEditeMode}
            onSubmit={onHandleSubmit}
            isUpdating={isUpdating}
            cancelEditing={cancelEditing}
          />
          : <ProfileData
            profile={profile}
            isOwner={isOwner}
            setEditeMode={setEditeMode}
          />
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
  updatePhoto,
  updateInfo,
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(ProfileInfo)

export default ProfileInfoContainer

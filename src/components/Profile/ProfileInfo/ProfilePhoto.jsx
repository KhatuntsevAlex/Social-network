import React from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/userLogo.png'
import addPhoto from '../../../assets/images/addPhoto.svg'

const ProfilePhoto = ({
  small,
  isOwner,
  onMainPhotoSelect,
  downloadFileBtnVisibility,
  setDownloadFileBtnVisibility,
}) => (
    <div
      className={s.avaWrapper}
      onMouseEnter={() => { setDownloadFileBtnVisibility(true) }}
      onMouseLeave={() => { setDownloadFileBtnVisibility(false) }}
    >
      <img src={small || userPhoto} className={s.ava} alt="..." />
      {
        isOwner && downloadFileBtnVisibility &&
        <>
          <input type="file" id="input-file" className={s.inputFile} onChange={onMainPhotoSelect} />
          <label tabIndex="0" htmlFor="input-file" className={s.inputFileButton}>
            <span className={s.inputFileIconWrapper}>
              <img src={addPhoto} alt="Choose file" width="25" />
            </span>
          </label>
        </>
      }
    </div>
  )

export default ProfilePhoto

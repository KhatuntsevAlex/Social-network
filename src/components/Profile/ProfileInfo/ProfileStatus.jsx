import React, { useState, useEffect } from 'react'

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = e => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {
        !editMode
          ? <span onDoubleClick={activateEditMode}><strong>Status: </strong>{status || (props.isOwner && 'Please click twice to change your status')}</span>
          : <input
            onBlur={deactivateEditMode}
            value={status}
            autoFocus
            onChange={onStatusChange}
          />
      }
    </div>
  )
}

export default ProfileStatus

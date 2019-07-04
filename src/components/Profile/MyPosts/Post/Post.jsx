import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  const {
    imgSrc, message, likesCount,
    id, dellPost,
  } = props
  return (
    <div className={s.item}>
      <img src={imgSrc} alt="..." />
      {message}
      <div>
        <span>Like</span>
        {' '}
        {likesCount}
      </div>
      <div>
        <button
          id={id}
          onClick={() => { dellPost(id) }}
          className="btn btn-danger btn-sm"
          type="button"
        >
          {'Удалить'}
        </button>
      </div>
    </div>
  )
}

export default Post

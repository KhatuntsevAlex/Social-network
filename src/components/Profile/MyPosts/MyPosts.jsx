import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const {
    id, posts, dellPost, updateNewPostText, newPostText, addPost,
  } = props
  const post = posts.map(p => (
    <Post
      key={p.id}
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      imgSrc={p.imgSrc}
      dellPost={dellPost}
    />
  ))

  const onNewPostChange = (e) => {
    const text = e.target.value
    updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div className="md-form">
          <textarea
            id="form10"
            className="md-textarea form-control mb-3"
            rows="3"
            onChange={onNewPostChange}
            type="text"
            value={newPostText}
            placeholder="Введите текст"
            required
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            type="button"
            id={id}
            onClick={() => { addPost() }}
          >
            {'Добавить пост'}
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {post}
      </div>
    </div>
  )
}

export default MyPosts

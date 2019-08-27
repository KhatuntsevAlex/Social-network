import React from 'react'
import { connect } from 'react-redux'
import { addPost, dellPost } from '../../../redux/profile-reducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostForm from './PostForm'

const MyPosts = ({ posts, ...funcs }) => {
  const post = posts.map(p => (
    <Post
      key={p.id}
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      imgSrc={p.imgSrc}
      dellPost={funcs.dellPost}
    />
  ))

  const onSubmit = ({ text }) => {
    funcs.addPost(text)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <PostForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {post}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  newPostText: state.profilePage.newPostText,
  posts: state.profilePage.posts,
})

const mapDispatchToProps = { addPost, dellPost }

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

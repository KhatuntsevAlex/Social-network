import { connect } from 'react-redux'
import { addPost, updateNewPostText, dellPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const mapStateToProps = state => ({
  newPostText: state.profilePage.newPostText,
  posts: state.profilePage.posts,
})

const mapDispatchToProps = { updateNewPostText, addPost, dellPost }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

import { addPost, updateNewPostText, dellPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  })

let mapDispatchToProps = { updateNewPostText, addPost, dellPost, }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let post = props.posts.map(p =>
    <Post
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      imgSrc={p.imgSrc}
    />);
  // метод .map() - это цыкл для массива, который читает по порядку каждый его элемент

  let onAddPost = () => {
    props.addPost();
  }

  let onNewPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);

  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onNewPostChange}
            type="text"
            value={props.newPostText}
            placeholder="Введите текст"
          />
        </div>
        <div>
          <button id={props.id} onClick={onAddPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {post}
      </div>
    </div>
  );
};

export default MyPosts;
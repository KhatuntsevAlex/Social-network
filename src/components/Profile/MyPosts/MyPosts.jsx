import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let post = props.posts.map(p =>
    <Post
      key={p.id}
      id={p.id}
      message={p.message}
      likesCount={p.likesCount}
      imgSrc={p.imgSrc}
      onDellPost={props.dellPost}
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
        <div class="md-form">
          <textarea
            id="form10"
            class="md-textarea form-control"
            rows="3"
            onChange={onNewPostChange}
            type="text"
            value={props.newPostText}
            placeholder="Введите текст"
            required
          />
          <label for="form10"></label>
        </div>
        <div>
          {/*  <button id={props.id} onClick={onAddPost}>Добавить пост</button> */}
          <button className="btn btn-success" type="button" id={props.id} onClick={onAddPost}>Добавить пост</button>
        </div>
      </div>
      <div className={s.posts}>
        {post}
      </div>
    </div>
  );
};

export default MyPosts;
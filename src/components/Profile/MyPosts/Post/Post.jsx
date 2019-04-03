import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  let dellPost = () => {
    props.dellPost(props.id);    
  };

  return (
    <div className={s.item}>
      <img src={props.imgSrc} alt="..." />
      {props.message}
      <div>
        <span>Like</span>  {props.likesCount}
      </div>
      <div>
        <button id={props.id} onClick={dellPost}>Удалить пост</button>
      </div>
    </div >
  );
};

export default Post; 
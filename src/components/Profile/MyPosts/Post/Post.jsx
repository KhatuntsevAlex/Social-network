import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src={props.imgSrc} alt="..." />
      {props.message}
      <div>
        <span>Like</span>  {props.likesCount}
      </div>
      <div>
        {/* <button id={props.id} onClick={() => {props.onDellPost(props.id)}}>Удалить</button> */}
        {/* <nav className="navbar navbar-light bg-light"> */}
          {/* <form className="form-inline"> */}           
            <button id={props.id} onClick={() => {props.onDellPost(props.id)}} className="btn btn-danger btn-sm" type="button">Удалить</button>
          {/* </form> */}
        {/* </nav> */}
      </div>
    </div >
  );
};

export default Post; 
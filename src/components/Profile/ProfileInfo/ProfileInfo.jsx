import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src={props.myProfile.profImgSrc}
          className={s.titleImage}
          alt="..."
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={props.myProfile.avaSrc}
          className={s.ava}
          alt="..."
        />
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;

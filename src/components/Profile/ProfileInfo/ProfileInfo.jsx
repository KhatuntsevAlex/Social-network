import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Users/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile)
    return <Preloader />
  return (
    <div>
      <div>
        <img
          /* src={props.profile.profImgSrc} */
          src={props.profile.photos.large}
          className={s.titleImage}
          alt="..."
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          /* src={props.profile.avaSrc} */
          src={props.profile.photos.small}
          className={s.ava}
          alt="..."
        />
        {props.profile.fullName ? <strong> {props.profile.fullName}</strong> : null}
        {props.profile.aboutMe ? <p><b>Обо мне: </b>{props.profile.aboutMe}</p> : null}
        {props.profile.contacts.facebook ? <p><b>facebook: </b>{props.profile.contacts.facebook}</p> : null}
        {props.profile.contacts.github ? <p><b>github: </b>{props.profile.contacts.github}</p> : null}
        {props.profile.contacts.instagram ? <p><b>instagram: </b>{props.profile.contacts.instagram}</p> : null}
        {props.profile.contacts.mainLink ? <p><b>mainLink: </b>{props.profile.contacts.mainLink}</p> : null}
        {props.profile.contacts.twitter ? <p><b>twitter: </b>{props.profile.contacts.twitter}</p> : null}
        {props.profile.contacts.vk ? <p><b>vk: </b>{props.profile.contacts.vk}</p> : null}
        {props.profile.contacts.website ? <p><b>website: </b>{props.profile.contacts.website}</p> : null}
        {props.profile.contacts.youtube ? <p><b>youtube: </b>{props.profile.contacts.youtube}</p> : null}
        {props.profile.lookingForAJobDescription ? <p><b>Работа: </b>{props.profile.lookingForAJobDescription}</p> : null}
      </div>
    </div>
  );
}

export default ProfileInfo;

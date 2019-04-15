import React from "react";
import s from "./MyFriends.module.css";
import { NavLink } from "react-router-dom";

{/*<NavLink>...</NavLink> - добавляет к урл адресу то что в атрибуте to
NavLink это тег <a> - а значит в стилях ссылаемся на а*/}

const MyFriends = (props) => {
  return (    
    <div className={s.item}>
      <NavLink to={'/' + props.name + props.id} activeClassName={s.activeLink}>
        <img src={props.avaSrc} alt="..." />
        <span>{props.name}</span>
      </NavLink>
    </div>
    
  );
};

export default MyFriends;

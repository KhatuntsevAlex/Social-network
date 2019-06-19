import React from "react";
import s from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

{/*<NavLink>...</NavLink> - добавляет к урл адресу то что в атрибуте to
NavLink это тег <a> - а значит в стилях ссылаемся на а*/}

const NavItem = (props) => {
  return (
      <div className={s.item}>
        <NavLink to={props.linkTo} className={s.item} activeClassName={s.activeLink}>
          <img src={props.imgSrc} alt="..." />
          <span className={s.navTxt}>{props.name}</span>
        </NavLink>
      </div>   
  );
};
/* 
  let c1 = "item";
  let c2 = "active";
  let classes = c1 + " " + c2;
  // результат - "item active"
  let classNew = `${c1} ${c2}`; //шаблонная строка
  // результат тот же - "item active"
  Если мы в строку внедряем javascript код
  то добавляем `${тут код}`
  и все в обратные кавычки
*/
export default NavItem;

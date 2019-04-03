import React from "react";
import s from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {
  let navItems = props.navItems.map(p => <NavItem name={p.name} linkTo={p.linkTo} imgSrc={p.imgSrc} />)
  let myFriends = props.myFriends.map(p => <MyFriends id = {p.id} name={p.name} avaSrc={p.avaSrc} />)
  return (
    <nav className={s.nav}>

      {navItems}

      <div>
        <h2>My friends</h2>
      </div>
      <div className={s.myFriends}>
        {myFriends}
      </div>
    </nav>
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
export default Navbar;

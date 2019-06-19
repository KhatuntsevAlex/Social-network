import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://previews.123rf.com/images/dr911/dr9111407/dr911140700077/30219208-human-head-creating-a-new-idea-creative-idea-vector.jpg"
        alt="..."
      />
      <div className={s.loginBlock}>
        {
          props.isAuth ? 
          <NavLink to={'/profile/' + props.userId}>
               {props.login}
            </NavLink>
          :
            <NavLink to='/login'>
              <button className="btn btn-success" type="button">Login</button>
            </NavLink>
        }

      </div>
    </header>
  );
};
export default Header;

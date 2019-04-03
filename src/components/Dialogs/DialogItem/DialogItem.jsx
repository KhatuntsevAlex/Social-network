import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
                <img src={props.avaSrc} alt='...'></img>
                <span className={s.dialTxt}>{props.name}</span>
            </NavLink> {/*меняет url*/}
        </div>
    );
}



export default DialogItem;
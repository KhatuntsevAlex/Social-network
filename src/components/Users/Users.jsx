import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/images/userLogo.png"
import { NavLink } from "react-router-dom";


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.users}>
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    {pages.map(p =>
                        (<div key={p.id} onClick={() => props.onPageChanged(p)}>
                            <li className="page-item"><a className="page-link" href="#">{p}</a></li>
                        </div>
                        )
                    )}
                </ul>
            </nav>

            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name/* fullName */}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
        /* </div> */
    );
}


export default Users
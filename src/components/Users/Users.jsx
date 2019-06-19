import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/images/userLogo.png"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

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
                    <div className={s.userDescription}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='' align='middle' />
                            </NavLink>
                        </div>
                        <div>
                            {u.name/* fullName */}
                            <br />
                            {u.status}
                        </div>
                    </div>
                    
                    <div className={s.follow_unfollowBtn}>
                        {u.followed
                            ? <button
                                className="btn btn-danger btn-sm"
                                onClick={() => props.unfollow(u.id)}
                                disabled={props.followingInProgress.some(id => id===u.id)}
                            >Unfollow</button>
                            : <button
                                className="btn btn-success btn-sm"
                                onClick={() => props.follow(u.id)}
                                disabled={props.followingInProgress.some(id => id===u.id)}
                            >Follow</button>}
                    </div>
                </span>

            </div>)
            }
        </div>
        /* </div> */
    );
}


export default Users
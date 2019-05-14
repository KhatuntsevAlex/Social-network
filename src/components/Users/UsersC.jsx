import React from "react"
import s from "./Users.module.css"
import * as axios from "axios"
import userPhoto from "../../assets/images/userLogo.png"


class Users extends React.Component {
    /* constructor(props){super(props)} */ //если делегирует только пропсы то можно конструктор не писать
    constructor(props){//конструктор будет вызван один раз пока компонента жива, соответственно условия для запроса ставить не нужно
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response/*ответ от сервера*/ => {
            this.props.setUsers(response.data.items);//тут смотрим через дебагер и.т.п что нам нужно и что приходит с сервака
        });
    }
    /* getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    } */

    render() {
        return (
           /*  <div>
            <button onClick={this.getUsers}>Get users</button> */
            <div className={s.users}>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users
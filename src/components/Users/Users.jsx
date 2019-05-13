import React from "react"
import s from "./Users.module.css"

let Users = (props) => {

    if (props.users.length === 0)
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Alex',
                status: "I'm looking for a job!",
                location: { city: 'Kiev', country: 'Ukraine' },
                userPhoto: "https://i.pinimg.com/736x/37/95/3f/37953f57eba839c5f20e91558695e77a.jpg"
            },
            {
                id: 2,
                followed: true,
                fullName: 'Dima',
                status: "I'm looking for a job!",
                location: { city: 'Kharkiv', country: 'Ukraine' },
                userPhoto: "https://i.pinimg.com/736x/37/95/3f/37953f57eba839c5f20e91558695e77a.jpg"
            },
            {
                id: 3,
                followed: false,
                fullName: 'Leon',
                status: "I'm looking for a job!",
                location: { city: 'Chernivtsi', country: 'Ukraine' },
                userPhoto: "https://i.pinimg.com/736x/37/95/3f/37953f57eba839c5f20e91558695e77a.jpg"
            },
            {
                id: 4,
                followed: false,
                fullName: 'DonDon',
                status: "I'm looking for a job!",
                location: { city: 'Borispol', country: 'Ukraine' },
                userPhoto: "https://i.pinimg.com/736x/37/95/3f/37953f57eba839c5f20e91558695e77a.jpg"
            }
        ]
        );

    return (
        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.userPhoto} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
}

export default Users
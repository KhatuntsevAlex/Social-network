const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        /* {
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
        } */
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: true };
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return { ...u, followed: false };
                    return u;
                })
            };
            case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
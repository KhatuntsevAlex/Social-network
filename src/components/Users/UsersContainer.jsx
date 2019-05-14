import { connect } from "react-redux";
import Users from "./UsersC";
import { unfollowActionCreator, followActionCreator, setUsersActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Users);
export default UsersContainer;
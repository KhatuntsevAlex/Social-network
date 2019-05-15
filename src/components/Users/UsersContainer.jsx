import { connect } from "react-redux";
import Users from "./Users";
import { unfollowActionCreator, followActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalCount: (totalCount) => dispatch(setTotalCountActionCreator(totalCount))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Users);
export default UsersContainer;
import React from "react";
import { setAuthUserData } from "../../redux/auth-reduser";
import { toggleIsFetching } from "../../redux/users-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.isAuth().then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = { setAuthUserData, toggleIsFetching, }

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(HeaderContainer);
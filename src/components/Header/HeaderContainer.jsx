import React from "react";
import * as axios from "axios";
import { setAuthUserData } from "../../redux/auth-reduser";
import { toggleIsFetching } from "../../redux/users-reducer";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
                {
                    withCredentials: true,
                    API_KEY: '361410f7-848f-48ab-8643-debcfd35aed5',
                })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
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
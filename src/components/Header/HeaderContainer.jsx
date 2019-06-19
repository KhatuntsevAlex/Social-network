import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = state => ({
    login: state.auth.login,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
})

let mapDispatchToProps = { getAuthUserData }

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(HeaderContainer);
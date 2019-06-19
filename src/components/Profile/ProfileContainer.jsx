import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = state => ({})

let mapDispatchToProps = { getUserProfile, }

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(WithUrlDataContainerComponent);

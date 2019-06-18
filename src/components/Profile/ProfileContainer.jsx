import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() { 
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
           
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
};

let mapStateToProps = (state) => (
    {a: 13}
)

let mapDispatchToProps={
    setUserProfile,
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(WithUrlDataContainerComponent);

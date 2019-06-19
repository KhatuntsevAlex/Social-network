import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

let mapStateToProps = state => ({profile: state.profilePage.profile})

let mapDispatchToProps = {}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ProfileInfo);

export default ProfileInfoContainer;
import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    myProfile: state.profilePage.myProfile
  }
}

let mapDispatchToProps = (dispatch) => {
  return null
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ProfileInfo);

export default ProfileInfoContainer;
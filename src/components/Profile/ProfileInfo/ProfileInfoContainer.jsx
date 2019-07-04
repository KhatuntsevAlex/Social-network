import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import { updateStatus } from '../../../redux/profile-reducer';

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

const mapDispatchToProps = {
  updateStatus,
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(ProfileInfo)

export default ProfileInfoContainer

import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = state => ({
  navItems: state.sidebar.navItems,
  myFriends: state.sidebar.myFriends,
})

const NavbarContainer = connect(mapStateToProps, {}, null, { pure: false })(Navbar)

export default NavbarContainer

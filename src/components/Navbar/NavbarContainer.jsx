import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = state => ({
    navItems: state.sidebar.navItems,
    myFriends: state.sidebar.myFriends
})

let mapDispatchToProps = {}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Navbar)

export default NavbarContainer;

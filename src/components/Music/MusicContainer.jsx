import { connect } from "react-redux";
import Music from "./Music";

let mapStateToProps = state => ({musicPage: state.musicPage})

let mapDispatchToProps = {}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Music)

export default MusicContainer;
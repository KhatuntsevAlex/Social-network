import { connect } from "react-redux";
import Music from "./Music";

let mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return null;
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Music)

export default MusicContainer;
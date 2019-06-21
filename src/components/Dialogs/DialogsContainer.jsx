import { sendMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose  } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

let mapStateToProps = state => ({ dialogsPage: state.dialogsPage, })

let mapDispatchToProps = { updateNewMessageText, sendMessage, }

export default compose(
    connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
    withAuthRedirect
)(Dialogs)
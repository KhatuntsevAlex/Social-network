import { sendMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
} */

//or

let mapDispatchToProps = { updateNewMessageText, sendMessage, }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Dialogs);

export default DialogsContainer;
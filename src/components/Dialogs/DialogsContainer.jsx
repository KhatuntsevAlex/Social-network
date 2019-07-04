import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import withAuthRedirect from '../../hoc/withAuthRedirect'

const mapStateToProps = state => ({ dialogsPage: state.dialogsPage })

const mapDispatchToProps = { updateNewMessageText, sendMessage }

export default compose(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false }),
  withAuthRedirect
)(Dialogs)

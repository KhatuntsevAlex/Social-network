import { connect } from 'react-redux'
import Music from './Music'

const mapStateToProps = state => ({ musicPage: state.musicPage })

const MusicContainer = connect(mapStateToProps, {}, null, { pure: false })(Music)

export default MusicContainer

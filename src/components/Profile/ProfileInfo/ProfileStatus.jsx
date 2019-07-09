import React from 'react'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }

  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode
            ? <span onDoubleClick={this.activateEditMode}>{this.state.status || 'Please click twice to change your status'}</span>
            : <input
              onBlur={this.deactivateEditMode}
              autoFocus={'true'}
              value={this.state.status}
              onChange={(e) => { this.setState({ status: e.target.value }) }}
            />
        }
      </div>
    )
  }

}

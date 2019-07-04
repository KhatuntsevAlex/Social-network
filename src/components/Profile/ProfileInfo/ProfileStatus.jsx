import React from 'react'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
      staus: this.props.status,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  render() {
    const { status } = this.props
    return (
      <div>
        {
          !this.state.editMode
            ? <span onDoubleClick={this.activateEditMode}>{status || 'Please click twice to change your status'}</span>
            : <input
              onBlur={this.deactivateEditMode}
              autoFocus={'true'}
              value={this.state.status || status}
              onChange={(e) => { this.setState({ status: e.target.value }) }}
            />
        }
      </div>
    )
  }

}

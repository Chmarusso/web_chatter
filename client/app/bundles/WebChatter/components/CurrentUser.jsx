import React, { PropTypes } from 'react'
import styles from './CurrentUser.css'

export default class CurrentUser extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    console.log(styles)
  }

  renderMessage() {
    if(this.props.isAuthenticated) {
      return (<span>Welcome, {this.props.fullName}.</span>);
    } else {
      return (<span>You are not logged in.</span>);
    }
  }

  render() {
    return (<div className='container'>{this.renderMessage()}</div>);
  }
}

import React, { PropTypes } from 'react'
import { Alert } from 'antd';

export default class AlertMessage extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  renderMessage() {
    if(this.props.alertType) {
      return (<Alert message={this.props.message} type={this.props.alertType} />);
    } else {
      return (<span></span>);
    }
  }

  render() {
    return (<div>{this.renderMessage()}</div>);
  }
}

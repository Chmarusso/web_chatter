import React, { PropTypes } from 'react'
import { Row, Col } from 'antd';
import { Link } from 'react-router'
import LoginForm from '../containers/LoginFormContainer';

export default class Home extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <LoginForm />
            <p><Link to="/user">Restricted area</Link></p>
            <p><Link to="/chats">Chats</Link></p>
          </Col>
        </Row>
      </div>
    );
  }
}

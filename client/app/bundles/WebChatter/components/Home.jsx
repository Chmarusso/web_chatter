import React, { PropTypes } from 'react'
import { Row, Col } from 'antd';
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
          </Col>
        </Row>
      </div>
    );
  }
}

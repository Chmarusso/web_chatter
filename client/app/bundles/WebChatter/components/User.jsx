import React, { PropTypes } from 'react'
import { Row, Col } from 'antd';

export default class User extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            This section is for logged users.
          </Col>
        </Row>
      </div>
    );
  }
}

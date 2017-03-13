import React, { PropTypes } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export default class LoginForm extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.loginUser({fullName: 'Bill Gates', email: 'chuj'})
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

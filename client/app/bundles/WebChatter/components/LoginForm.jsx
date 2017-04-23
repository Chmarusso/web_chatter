import React, { PropTypes } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export default class LoginForm extends React.Component {

  constructor(props, _railsContext) {   
    super(props);
    this.state = {
        email: '',
        password: ''
      };    
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticateUser(this.state.email, this.state.password);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }  

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                 placeholder="Email" name='email' value={this.state.email} onChange={this.handleInputChange} />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} 
                 type="Password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleInputChange} />
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

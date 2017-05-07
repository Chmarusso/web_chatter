import React, { PropTypes } from 'react'
import { Row, Col, Menu } from 'antd';
import ActionCable from 'actioncable';

export default class Chats extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      chats: [],
    };
    this.subscribeChannel()
  }

  addChat(chat) {
    this.state.chats.push(chat)
    this.setState({
      chats: this.state.chats
    });
  } 

  subscribeChannel() {
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable');
    cable.subscriptions.create('ChatsChannel', {
      received: (data) => {
        this.addChat(data.chat);
      } 
    });
  }

  renderChats() {
    const chats = this.state.chats; 
    const chatItems = chats.map((chat, i) =>
      <Menu.Item key={i}>{chat.name} - {chat.email}</Menu.Item>
    );

    return chatItems;
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <Menu mode="inline">
              {this.renderChats()}
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

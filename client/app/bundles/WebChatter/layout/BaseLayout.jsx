import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { Layout, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import BaseComponent from 'libs/components/BaseComponent';
import CurrentUserContainer from '../containers/CurrentUserContainer';
import 'antd/dist/antd.css'
import './BaseLayout.css';

export default class BaseLayout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  /* eslint-disable react/no-unescaped-entities */
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Row>
              <Col span={20}>
                <h1 className='title'>WebChatter</h1>
              </Col>
              <Col span={4}>
                <CurrentUserContainer/>
              </Col>
            </Row>
          </Header>
          <Content>{this.props.children}</Content>
          <Footer></Footer>
        </Layout>
      </div>
    );
  }
}

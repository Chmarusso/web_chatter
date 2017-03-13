import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm'
import * as actions from '../actions/currentUserActionCreators'

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(LoginForm);

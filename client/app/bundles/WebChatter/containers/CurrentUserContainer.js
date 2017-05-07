import { connect } from 'react-redux';
import CurrentUser from '../components/CurrentUser';
import * as actions from '../actions/currentUserActionCreators';

const mapStateToProps = (state) => ({
  fullName: state.$$currentUserStore.get('fullName'),
  isAuthenticated: state.$$currentUserStore.get('isAuthenticated')
});

export default connect(mapStateToProps, actions)(CurrentUser);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions/alertActionCreators';

class EnsureUserLoggedInContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  
  componentWillMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      this.props.renderAlert('error', 'User not found.');
      browserHistory.replace("/");
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return this.props.children
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.$$currentUserStore.get('isAuthenticated')
});

const mapDispatchToProps = (dispatch) => {
  return {
    renderAlert: (type, message) => {
      dispatch(actions.renderAlert(type, message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnsureUserLoggedInContainer);

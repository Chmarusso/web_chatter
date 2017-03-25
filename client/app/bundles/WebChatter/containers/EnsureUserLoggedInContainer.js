import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class EnsureUserLoggedInContainer extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }

  componentWillMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      browserHistory.replace("/");
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.$$currentUserStore.get('isAuthenticated')
});

export default connect(mapStateToProps, {})(EnsureUserLoggedInContainer);

import { connect } from 'react-redux';
import AlertMessage from '../components/AlertMessage';

const mapStateToProps = (state) => ({
  alertType: state.$$alertStore.get('alertType'),
  message: state.$$alertStore.get('message')
});

export default connect(mapStateToProps, {})(AlertMessage);

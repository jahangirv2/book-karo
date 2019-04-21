import { connect } from 'react-redux';
import { Login } from '../../components/views/Login';
import * as actionTypes from './actions';

const mapStateToProps = ({ auth }) => ({
  ...auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(actionTypes.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
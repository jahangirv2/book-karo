import { connect } from 'react-redux';
import { Login } from '../../components/views/Login';
import * as actionTypes from './actions';
import { SignUp } from '../../components/views/SignUp';

const mapStateToProps = ({ auth }) => ({
  ...auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(actionTypes.login(data)),
  signup: data => dispatch(actionTypes.signup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export const Signup = connect(mapStateToProps,mapDispatchToProps)(SignUp)
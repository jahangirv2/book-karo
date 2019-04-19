import { connect } from 'react-redux';
import { Login } from '../../components/views/Login';
import {
  login, loginSuccess, loginFail,
} from './actions';

const mapStateToProps = ({ auth }) => ({
  ...auth,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
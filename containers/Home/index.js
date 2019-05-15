import { connect } from 'react-redux';
import { Home } from '../../components/views/Home';
import * as actionTypes from './actions';

const mapStateToProps = ({ home }) => ({
  ...home,
});

const mapDispatchToProps = dispatch => ({
  fetchHotels: () => dispatch(actionTypes.fetchHotels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
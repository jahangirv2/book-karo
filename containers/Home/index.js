import { connect } from 'react-redux';
import { Home } from '../../components/views/Home';
import * as actionTypes from './actions';

const mapStateToProps = ({ home }) => ({
  ...home,
});

const mapDispatchToProps = dispatch => ({
  fetchHotels: data => dispatch(actionTypes.fetchData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
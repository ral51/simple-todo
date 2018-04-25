import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Button);
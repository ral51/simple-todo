import { connect } from 'react-redux';
import List from '../components/List';
import { toggleItem } from '../actions'
import { Filters } from '../actions'

function getItemList(items, filter) {

	switch(filter)  {
		case Filters.SHOW_ALL:
			return items;
		case Filters.SHOW_COMPLETED:
			return items.filter(t => t.completed);
		case Filters.SHOW_ACTIVE:
			return items.filter(t => !t.completed);
		default: 
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state) => ({
	items: getItemList(state.items, state.filter)
})

const mapDispatchtoProps = (dispatch) => ({
	toggleItem: (id) => dispatch(toggleItem(id))
})

export default connect(
	mapStateToProps, 
	mapDispatchtoProps)(List)
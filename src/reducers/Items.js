import { UserActions } from '../actions';

const items = (state = [], action) => {
	switch(action.type) {
		case UserActions.ADD_ITEM:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case UserActions.TOGGLE_ITEM:
			return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item);
		default:
			return state;

	}
}

export default items;
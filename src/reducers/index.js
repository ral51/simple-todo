import { combineReducers } from 'redux';
import items from './Items';
import filter from './Filter';

export default combineReducers({
	items,
	filter
});
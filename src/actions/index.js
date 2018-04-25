let id = 0;

export const UserActions = {
	ADD_ITEM: 'ADD_ITEM',
	TOGGLE_ITEM: 'TOGGLE_ITEM'
}

export const FilterActions = {
	SET_FILTER: 'SET_FILTER'
}

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addToList = text => ({
	type: UserActions.ADD_ITEM,
	id: id++,
	text
})

export const toggleItem = id => ({
	type: UserActions.TOGGLE_ITEM,
	id
})

export const setFilter = filter => ({
	type: FilterActions.SET_FILTER,
	filter
})
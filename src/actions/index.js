let id = 0;

export const addToList = text => ({
	type: "ADD_ITEM",
	id: id++,
	text
})

export const toggleItem = id => ({
	type: "TOGGLE_ITEM",
	id
})

export const setFilter = filter => ({
	type: "SET_FILTER",
	filter
})

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const UserActions = {
	ADD_ITEM: 'ADD_ITEM',
	TOGGLE_ITEM: 'TOGGLE_ITEM'
}
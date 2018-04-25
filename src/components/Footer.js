import React from 'react';
import { Filters } from '../actions';
import FilterLink from '../containers/FilterButton';

function Footer () {

	return (
		<div>		
			<FilterLink filter={Filters.SHOW_ALL} > Show All </FilterLink>
			<FilterLink filter={Filters.SHOW_COMPLETED} > Show Completed </FilterLink>
			<FilterLink filter={Filters.SHOW_ACTIVE} > Show Active </FilterLink>
		</div>
		)
}

export default Footer;
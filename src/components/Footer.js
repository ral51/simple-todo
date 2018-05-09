import React from 'react';
import { Filters } from '../actions';
import FilterButton from '../containers/FilterButton';

function Footer () {

	return (
		<div>		
			<FilterButton filter={Filters.SHOW_ALL} > Show All </FilterButton>
			<FilterButton filter={Filters.SHOW_COMPLETED} > Show Completed </FilterButton>
			<FilterButton filter={Filters.SHOW_ACTIVE} > Show Active </FilterButton>
		</div>
		)
}

export default Footer;
import React from 'react';
import Item from './Item';

function List (props) {

	return (
		<ul>
			{
				props.items.map(item => (
					<Item key={item.id} {...item} onClick={() => props.toggleItem(item.id)}/>
				))
			}
		</ul>
	)
}

export default List;
import React from 'react';

function Item (props){
	return (
		<li onClick={props.onClick} style={{
				"textDecoration": props.completed ? 'line-through' : 'none'
		}}>
			{props.text}
		</li>

	)
}


export default Item;
import React from 'react';

function Button (props)  {

	return (
		<button 
		onClick={props.onClick} 
		active={props.active.toString()}>
		{props.children}
	</button>
	);
}


export default Button;
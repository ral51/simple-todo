import React from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions';


class AddToList extends React.Component {

	constructor(props) {
		super(props);
		this.input = null;
		this.handlers = this.createHandlers(props);
	}

	createHandlers(props) {
		let onSubmit = function (value) {
			props.dispatch(addToList(value));
		}

		return {
			onSubmit: onSubmit
		}
	}

	render() {
		return (
			<div>
			<form onSubmit={evt=>{ 
				evt.preventDefault();
				if(!this.input.value.trim()) {
					return;
				}
				this.handlers.onSubmit(this.input.value);
				this.input.value = "";
			}} 
			>
				<input ref={el=>this.input=el} />
				<button type="submit" > Add To List </button>
			</form>
		</div>
		)
	}

}

export default connect()(AddToList)
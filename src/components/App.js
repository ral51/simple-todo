import React from 'react';
import AddToList from './AddToList';
import List from '../containers/VisibleList';
import Footer from './Footer';

function App (props) {
	return (
		<div>
			<AddToList />
			<List />
			<Footer />
		</div>
	);
}

export default App;
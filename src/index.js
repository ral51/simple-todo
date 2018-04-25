import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux'; 
import reducer from './reducers';
import App from './components/App';

var store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
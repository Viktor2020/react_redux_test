import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';

import store from './store';

ReactDOM.render(

	<MuiThemeProvider>

    	<Provider store={store}>

        	<TodoApp />

    	</Provider>

    </MuiThemeProvider>,

    document.getElementById('root')
);

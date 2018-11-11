import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import './Todo.css';

var styleList = {
	opacity: 1,
	width: '350px'
}

var styleDelBtn = {
	backgroundColor: '#ffd699',
	color: '#ff0000'
}

export default class Todo extends Component {

    render() {
    	
    	const { text, fontSize, onToggle } = this.props;

        return (
        	<div className='todo'>
			    <button 
			    	className='btnTodo'
			    	onClick={ onToggle }
			    	style={{ fontSize: fontSize }}
			    > 

			    { text }

			    </button>
			</div>
        );
    }
}

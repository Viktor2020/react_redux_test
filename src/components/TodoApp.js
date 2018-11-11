import React, { Component } from 'react';

import TodoList from './TodoList';

import './TodoApp.css';

export default class TodoApp extends Component {
    render() {
        return (
            <div className='root'>
                <div className='container'>
                    <div className="app">
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    }
}

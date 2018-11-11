
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, deleteTodo, addTodo } from '../actions';

import Todo from './Todo';

class TodoList extends Component {

    constructor() {
        super();
        this.count = 0;
        document.body.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.props.addTodo('btn' + (this.count++), this.count * 10);
            }
        })
    }

    render() {

        return (
            <div>
                {
                   this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            fontSize={todo.fontSize}
                            onToggle={() => this.props.toggleTodo(todo.id)}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
          return todos;

        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed);

        case 'SHOW_NEW':
          return todos.filter(todo => !todo.completed);
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo, addTodo })(TodoList);


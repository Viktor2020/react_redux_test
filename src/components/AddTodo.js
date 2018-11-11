import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import TextField from 'material-ui/TextField';

const ENTER_KEY = 13;

class AddTodo extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    state = {
        text: ""
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.props.addTodo(this.state.text);
            this.setState({ text: "" });
        }
    }

    render() {
        return (
            <TextField
                floatingLabelText="What needs to be done?"
                value={this.state.text}
                onChange={this.handleTextChange}
                onKeyDown={this.handleKeyDown}
                style={{
                    width: '100%'
                }}
            />
        );
    }
}

export default connect(undefined, { addTodo })(AddTodo);

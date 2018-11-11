import React, { Component } from 'react';

import { connect } from 'react-redux';

import Checkbox from 'material-ui/Checkbox';

import { setFilter } from '../actions';

class FilterLink extends Component {

    render() {

        const { active, children, onClick } = this.props;

        return (
            <Checkbox
                checked={active}
                label={children}
                onClick={onClick}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter
    };
}

function mapDisplatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    };
}

export default connect(mapStateToProps, mapDisplatchToProps)(FilterLink);


import React, { Component } from 'react';

import FilterLink from './FilterLink';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                <FilterLink filter="SHOW_NEW">New</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </div>
        );
    }
}

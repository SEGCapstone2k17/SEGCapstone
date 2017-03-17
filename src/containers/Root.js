import React, { Component } from 'react'
import { Link } from 'react-router';
import * as api from '../api';


export default class Root extends Component {
    render(){
        return (
            <div className="app-container">
                    <div className="app-content">{this.props.children}</div>
            </div>
        )
    }
}

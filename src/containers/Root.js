/*jshint esversion: 6 */
import React, { Component } from 'react'
import { Link } from 'react-router';
import * as api from '../api';


export default class Root extends Component {
    render(){
        return (
            <div className="app-container">
                <header>
                    <a href="/">
                        <span>
                            Home
                        </span>
                    </a>
                    <a href="/projects">
                        <span>
                            Projects
                        </span>
                    </a>
                    <a href="/addProject">
                        <span>
                            Add Project
                        </span>
                    </a>
                    <a href="/customers/">
                        <span>
                            Customers
                        </span>
                    </a>
                    <a href="/addCustomer/">
                        <span>
                            Add Customer
                        </span>
                    </a>
                </header>
                    <div className="app-content">{this.props.children}</div>
                <footer>
                  <p>
                    This is a demo of the Software Engineering Captone Project @author Cody McCoshen
                  </p>
                </footer>
            </div>
        )
    }
}

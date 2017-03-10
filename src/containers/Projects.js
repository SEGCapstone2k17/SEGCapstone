/*jshint esversion: 6 */
import React, { Component, PropTypes } from 'react';
import { ListProjects } from '../components/Projects.js';
import * as api from '../api';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null
        }
    }

    componentDidMount() {
        var query = window.location.href.split("?")[1] || '';
        this.fetchProjects(query);
    }

    // Perform an async call to fetch projects
    fetchProjects(query) {
        api.fetchProjects(query).then(projects => {
          this.setState({
          projects
        });
      });
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.projects) {
        return <ListProjects projects = { this.state.projects } />
      }

      return <h1> Fetching Projects...</h1>
    }

    render() {
        return (
          <div>
            {this.currentContent()}
          </div>
        )
    }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

export default Projects;

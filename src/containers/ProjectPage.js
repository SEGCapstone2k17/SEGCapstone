/*jshint esversion: 6 */
import React, {Component, PropTypes } from 'react';
import { ProjectPage } from '../components/ProjectPage';
import * as api from '../api';
const serverString = 'localhost:3000';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        }
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/projects/")[1] || '';
        this.fetchProjectById(param);
    }

    // Perform an async call to fetch projects
    fetchProjectById(param) {
        api.fetchProjectById(param).then(project => {
          this.setState({
          project
        });
      });
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.project) {
        return <ProjectPage project = { this.state.project } />
      }

      return <h1> Getting Project...</h1>
    }

    render() {
        return (
            <div>
                {this.currentContent()}
            </div>

        )
    }
}

Project.propTypes = {
  project: PropTypes.array.isRequired,
}

export default Project;

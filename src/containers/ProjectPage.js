/*jshint esversion: 6 */
import React, {Component, PropTypes } from 'react';
import { ProjectPage, ProjectPageEdit } from '../components/ProjectPage';
import * as api from '../api';
const serverString = 'localhost:3000';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            editable: false
        }
        this.toggleEditFields = this.toggleEditFields.bind(this)
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/projects/")[1] || '';
        this.fetchProjectById(param);
    }

    toggleEditFields() {
        console.log("Edit!");
        if(this.state.editable){
            this.setState({
                editable: false
            });
        } else {
            this.setState({
                editable: true
            });
        }
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
          if(this.state.editable){
              return (
                  <div>
                      <ProjectPageEdit project = { this.state.project } />
                      <button type="button" onClick={ this.toggleEditFields }>Cancel</button>
                  </div>
              );
          }
          return (
                <div>
                    <ProjectPage project = { this.state.project } />
                    <button type="button" onClick={ this.toggleEditFields }>Edit</button>
                </div>
            );
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

/*jshint esversion: 6 */
import React, {Component, PropTypes} from 'react';
import {ProjectPage, ProjectPageEdit} from '../components/ProjectPage';
import * as api from '../api';
const serverString = 'localhost:3000';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            customers: null,
            editable: false,
            wasDeleted: false
        };
        this.toggleEditFields = this.toggleEditFields.bind(this);
        this.removeProject = this.removeProject.bind(this);
    }

    componentDidMount() {
        var param = window.location.href.split(serverString + "/projects/")[1] || '';
        this.fetchProjectById(param);
        this.fetchCustomers('');
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

    removeProject() {
        api.removeProject(this.state.project[0].id)
            .then(deleteSucessful => {
              this.setState({
              wasDeleted: deleteSucessful
            })
        })
    }

    // Perform an async call to fetch projects
    fetchProjectById(param) {
        api.fetchProjectById(param).then(project => {
          this.setState({
          project
        });
      });
    }

    // Perform an async call to fetch customers
    fetchCustomers(query) {
        api.fetchCustomers(query).then(customers => {
          this.setState({
          customers
        });
      });
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.project) {
          if(this.state.editable){
              return (
                  <div>
                      <ProjectPageEdit project = {this.state.project} customers = {this.state.customers}/>
                      <button type="button" onClick={this.toggleEditFields}>Cancel</button>
                  </div>
              );
          }
          else if(this.state.wasDeleted) {
              return(
                  <div>
                      <h1>{this.state.project[0].name} was sucessfully deleted</h1>
                      <a href="/projects">
                        <button type="button">Back</button>
                      </a>
                  </div>
              );
          }
          else{
              return (
                    <div>
                        <ProjectPage project = {this.state.project} />
                        <button type="button" onClick={this.toggleEditFields}>Edit</button>
                        <button type="button" onClick={this.removeProject}>Delete</button>
                    </div>
                );
        }
    }
    else{
      return <h1> Getting Project...</h1>
    }
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

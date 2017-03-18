import React, { Component, PropTypes } from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
import { ListProjects } from '../components/Projects.js';
import * as api from '../api';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null
        }
        this.removeProject = this.removeProject.bind(this);
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

    removeProject(id,event) {
        var element = $(event.target).closest('.project-result');
        api.removeProject(id)
            .then(deleteSucessful => {
                element.addClass('deleted-item').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    element.remove();
                 });
        })
    }

    // Only render the component when we receive data from async call
    currentContent() {
      if (this.state.projects) {
        return (
            <div>
                <Sidebar is_projects_active = "active" />
                <ListProjects projects = {this.state.projects} removeProject = {this.removeProject}/>
            </div>
        );
      }

      return (
          <div>
              <Sidebar is_projects_active = "active" />
              <LoadingScreen />
          </div>
      );
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

import React, {PropTypes, Component} from 'react';
import {Sidebar} from '../components/Sidebar';
import {LoadingScreen} from '../components/LoadingScreen';
import {ProjectPage, ProjectPageEdit} from '../components/ProjectPage';
import * as api from '../api';
const serverString = 'localhost:3000';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            customers: null,
            wasDeleted: false
        };
        this.removeProject = this.removeProject.bind(this);
    }

    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOjbuBTgrJHH1hhpXqPCCThoIkFKWm3Wk&callback=initMap";
        script.async = true;
        document.body.appendChild(script);
    }

    componentDidMount() {
        this.fetchProjectById(this.props.params.id);
        this.fetchCustomers('');
    }

    removeProject(removed_project) {
        api.removeProject(removed_project.id)
            .then(deleteSucessful => {
                alert(`[${removed_project.id}] ${removed_project.name} was successfully removed!`);
                window.location.href = "/projects";
        })
    }

    // Perform an async call to fetch specific project
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
          return (
                <div>
                    <Sidebar is_projects_active = "active" />
                    <ProjectPage project = {this.state.project} removeProject = {this.removeProject}/>
                </div>
            );
    }
    else{
      return (
          <div>
              <Sidebar is_projects_active = "active" />
              <LoadingScreen />
          </div>
      );
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

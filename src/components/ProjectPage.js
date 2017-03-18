import React, {PropTypes, Component} from "react";
import {Header} from './Header';

class ProjectPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Projects" />
                <DashboardProject project = {this.props.project} removeProject = {this.props.removeProject} />
            </div>
        );
    }
}

class PageNavigation extends Component {
    render() {
        return (
            <div id="page-navigation">
                <ul>
                  <li>
                    <a href="/">Overview</a>
                  </li>
                  <li>
                    <a href="/projects">Search</a>
                  </li>
                  <li>
                    <a href="/addProject">Add</a>
                  </li>
                </ul>
            </div>
        );
    }
}

class DashboardProject extends Component {
    render() {
        const project = this.props.project[0];
        return (
            <div id="dashboard-project">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Project Overview</h2>
                    <div id="project-info" className="dashboard-block">
                      <div className="row">
                        <div className="small-12 large-8 columns">
                          <div id="project-info-basic">
                            <h3>Basic Information</h3>
                            <ul>
                              <li>
                                <b>Project ID: </b> {project.id}
                              </li>
                              <li>
                                <b>Name: </b> {project.name}
                              </li>
                              <li>
                                <p>
                                  <b>Description: </b> {project.description}
                                </p>
                              </li>
                              <li>
                                <b>Start Date: </b> {project.start_date}
                              </li>
                              <li>
                                <b>End Date: </b> {project.end_date}
                              </li>
                              <li>
                                <b>Estimated Cost: </b> ${project.quote_cost}
                              </li>
                              <li>
                                <b>Actual Cost: </b> ${project.actual_cost}
                              </li>
                            </ul>
                            <div id="project-actions">
                              <a className="btn-dark" href={`/editProject/${project.id}`}>Edit Project</a>
                              <a className="btn-warn" onClick={(event) => this.props.removeProject(project, event)}>Delete Project</a>
                            </div>
                            {/* End project-actions */}
                          </div>
                          {/* End project-info */}
                        </div>
                        <div className="small-12 large-4 columns">
                          <div id="project-info-location">
                            <h3>Location</h3>
                            <div id="project-map" className="map-locator">
                            </div>
                            {/* End client-map */}
                            <ul>
                              <li>
                                {project.street}
                              </li>
                              <li >
                                <input type="hidden" id="my-address" value={`${project.street} ${project.city} ON Canada`}/>
                                {project.city}, ON, {project.postal_code}
                              </li>
                              <li>
                                Canada
                              </li>
                            </ul>
                            <a href="#">Get Directions</a>
                          </div>
                          {/* End project-info */}
                        </div>
                      </div>
                    </div>
                    {/* End project-info */}
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 large-6 columns">
                    <h2>Project Photos (3)</h2>
                    <div id="project-photos" className="dashboard-block">
                      <a id="add-project-photo" className="btn" href="#">Add Project Photo</a>
                      <div className="row small-up-1 medium-up-2 large-up-4">
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                        <div className="column">
                          <img src="/assets/images/project-photo.jpg" alt="project-photo" />
                        </div>
                      </div>
                    </div>
                    {/* End project-photos */}
                  </div>
                  <div className="small-12 large-6 columns">
                    <h2>Project Notes (2)</h2>
                    <div id="project-notes" className="dashboard-block">
                      <a id="add-project-note" className="btn" href="#">Add Project Note</a>
                      <ul>
                        <li>
                          <span>Added March 3, 2017 by Ryan</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem felis. Fusce varius, eros sit amet dictum dictum, tortor purus auctor ligula, ut accumsan tortor massa id purus. Vivamus elit urna, fringilla non ipsum vel, molestie volutpat turpis.
                          </p>
                        </li>
                        <li>
                          <span>Added March 2, 2017 by Ryan</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sem felis. Fusce varius, eros sit amet dictum dictum, tortor purus auctor ligula, ut accumsan tortor massa id purus. Vivamus elit urna, fringilla non ipsum vel, molestie volutpat turpis.
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* End project-notes */}
                  </div>
                </div>
            </div>
        );
    }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired
}

module.exports = {
    ProjectPage: ProjectPage
};

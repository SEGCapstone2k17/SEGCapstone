import React, {PropTypes, Component} from "react";
import {Header} from './Header';

class CustomerPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Clients" />
                <DashboardClient customer = {this.props.customer} projects = {this.props.projects} removeProject = {this.props.removeProject} removeCustomer = {this.props.removeCustomer} />
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
                    <a href="/customers">Search</a>
                  </li>
                  <li>
                    <a href="/addCustomer">Add</a>
                  </li>
                </ul>
            </div>
        );
    }
}

class DashboardClient extends Component {
    render() {
        const customer = this.props.customer[0];
        const projects = this.props.projects;
        return (
            <div id="dashboard-client">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Client Overview</h2>
                    <div id="client-info" className="dashboard-block">
                      <div className="row">
                        <div className="small-12 large-8 columns">
                          <div id="client-info-basic">
                            <h3>Basic Information</h3>
                            <ul>
                              <li>
                                <b>Client ID: </b> {customer.id}
                              </li>
                              <li>
                                <b>Name: </b> {customer.first_name} {customer.last_name}
                              </li>
                              <li>
                                <b>Email: </b> {customer.email}
                              </li>
                              <li>
                                <b>Phone Number: </b> {customer.telephone}
                              </li>
                            </ul>
                            <div id="client-actions">
                              <a className="btn-dark" href={`/editCustomer/${customer.id}`}>Edit Client</a>
                              <a className="btn-warn" onClick={(event) => this.props.removeCustomer(customer, event)}>Delete Client</a>
                            </div>
                            {/* End client-actions */}
                          </div>
                          {/* End client-info */}
                        </div>
                        <div className="small-12 large-4 columns">
                          <div id="client-info-location">
                            <h3>Location</h3>
                            <div id="client-map" className="map-locator">
                            </div>
                            {/* End client-map */}
                            <ul>
                              <li>
                                {customer.street}
                              </li>
                              <li>
                                <input type="hidden" id="my-address" value={`${customer.street} ${customer.city} ON Canada`}/>
                                {customer.city}, ON {customer.postal_code}
                              </li>
                              <li>
                                Canada
                              </li>
                            </ul>
                            <a href="#">Get Directions</a>
                          </div>
                          {/* End client-info */}
                        </div>
                      </div>
                    </div>
                    {/* End client-info */}
                  </div>
                </div>
                <div className="row">
                  <div className="small-12 large-8 columns">
                    <h2>Client Projects ({projects.length})</h2>
                    {projects.map(project => {
                        return (
                            <div className="project-result dashboard-block">
                                <div className="row">
                                    <div className="small-12 large-9 columns">
                                        <div className="project-result-info">
                                            <h3><span className="project-result-status complete">Complete</span>{project.name}</h3>
                                            <span><b>Location: </b>{project.street} <b>in</b> {project.city}</span>
                                            <span><b>Type: </b>{project.type}</span>
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>
                                        {/* End project-result-info */}
                                    </div>
                                    <div className="small-12 large-3 columns">
                                        <div className="project-result-actions">
                                            <a className="btn-dark" href={`/projects/${project.id}`}>View Project</a>
                                            <a className="btn-dark" href={`/editProject/${project.id}`}>Edit Project</a>
                                            <a className="btn-dark" onClick={(event) => this.props.removeProject(project.id, event)}>Delete Project</a>
                                        </div>
                                        {/* End project-result-actions */}
                                    </div>
                                </div>
                            </div>
                        );
                     })}
                    {/* End project-result */}
                  </div>
                  <div className="small-12 large-4 columns">
                    <div className="search-tips dashboard-block">
                      <h3>Actions</h3>
                      <p>
                        List of possible actions such as Add Project for this client, add project in general, search project, search clients
                      </p>
                    </div>
                    {/* End search-tips */}
                  </div>
                </div>
            </div>
        );
    }
}

CustomerPage.propTypes = {
  customer: PropTypes.array.isRequired
}

module.exports = {
    CustomerPage: CustomerPage
};

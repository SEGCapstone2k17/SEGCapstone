import React, {ProptTypes, Component} from 'react';
import {Header} from './Header';

class AddProjectContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      document.title = "Add Project";
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Projects" />
                <PageNavigation />
                <DashboardOther customers = {this.props.customers} />
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
                      <li className="active">
                        <a href="/addProject">Add</a>
                      </li>
                    </ul>
              </div>
        );
    }
}

class DashboardOther extends Component {
    render() {
        const customers = this.props.customers;
        return (
            <div id="dashboard-other">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Add a New Project</h2>
                    <form action="/api/addProject" method="POST">
                        <div id="project-add" className="dashboard-block">
                          <div className="row">
                            <div className="small-12 columns">
                              <label htmlFor="project-name">Name <span className="required">*</span></label>
                              <input type="text" name="fName" className="project-text-form" id="project-name" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-type">Type  <span className="required">*</span></label>
                              <select name="type" className="project-select-form" id="project-type" multiple required>
                                <option value="1">Roofing</option>
                                <option value="2">Siding</option>
                                <option value="3">Other</option>
                              </select>
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-description">Description</label>
                              <textarea name="description" className="project-textarea-form" id="project-description" defaultValue={""} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-street">Street <span className="required">*</span></label>
                              <input type="text" name="street" className="project-text-form" id="project-street" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-postal-code">Postal Code <span className="required">*</span></label>
                              <input type="text" name="postalCode" className="project-text-form" id="project-postal-code" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-city">City <span className="required">*</span></label>
                              <select name="city" className="project-select-form" id="project-city" required>
                                <option value="Ottawa">Ottawa</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-start">Start Date</label>
                              <input type="date" name="startDate" className="project-text-form" id="project-start" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-end">End Date</label>
                              <input type="date" name="endDate" className="project-text-form" id="project-end" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-estimate">Estimated Cost ($)</label>
                              <input type="text" name="estimatedCost" className="project-text-form" id="project-estimate" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-cost">Actual Cost ($)</label>
                              <input type="text" name="actualCost" className="project-text-form" id="project-cost" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 columns">
                              <label htmlFor="project-contract">Contract</label>
                              <input type="file" name="contract" className="project-upload-form" id="project-contract" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 columns">
                              <label htmlFor="project-client">Project Client <span className="required">*</span></label>
                              <select defaultValue="-1" name="customer" className="project-select-form" id="project-client" required >
                                  <option value="-1">None</option>
                                  {customers.map(customer => {
                                      return <option value={`${customer.id}`}>{customer.first_name} {customer.last_name}</option>
                                  })}
                              </select>
                            </div>
                          </div>
                          <p className="required-info">Fields marked with * are required.</p>
                          <input type="submit" name="submit" className="btn" id="project-submit" defaultValue="Add Project" />
                        </div>
                    </form>
                    {/* End #client-add */}
                  </div>
                </div>
          </div>
      );
    }
}

module.exports = {
    AddProjectContent: AddProjectContent
};

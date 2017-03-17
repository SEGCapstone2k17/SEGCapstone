import React, {PropTypes, Component} from "react";
import {Header} from './Header';

class EditProjectPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Projects"/>
                <DashboardOther project = {this.props.project} customers = {this.props.customers} />
            </div>
        )
    }
}

class DashboardOther extends Component {
    render() {
        const project = this.props.project[0];
        const customers = this.props.customers;
        return (
            <div id="dashboard-other">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Edit Project</h2>
                    <form action="/api/editProject" method="POST">
                        <input type="hidden" name="id" value={`${project.id}`}/>
                        <div id="project-add" className="dashboard-block">
                          <div className="row">
                            <div className="small-12 columns">
                              <label htmlFor="project-name">Name <span className="required">*</span></label>
                              <input type="text" name="fName" defaultValue={`${project.name}`} className="project-text-form" id="project-name" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-type">Type  <span className="required">*</span></label>
                              <select name="type" defaultValue={`${project.project_type_id}`} className="project-select-form" id="project-type" multiple required>
                                <option value="1">Roofing</option>
                                <option value="2">Siding</option>
                                <option value="3">Other</option>
                              </select>
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-description">Description</label>
                              <textarea name="description" defaultValue={`${project.description}`} className="project-textarea-form" id="project-description" defaultValue={""} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-street">Street <span className="required">*</span></label>
                              <input type="text" name="street" defaultValue={`${project.street}`} className="project-text-form" id="project-street" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-postal-code">Postal Code <span className="required">*</span></label>
                              <input type="text" name="postalCode" defaultValue={`${project.postal_code}`} className="project-text-form" id="project-postal-code" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="project-city">City <span className="required">*</span></label>
                              <select name="city" defaultValue={`${project.city}`} className="project-select-form" id="project-city" required>
                                <option value="Ottawa">Ottawa</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-start">Start Date</label>
                              <input type="date" name="startDate" defaultValue={`${project.start_date}`} className="project-text-form" id="project-start" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-end">End Date</label>
                              <input type="date" name="endDate" defaultValue={`${project.end_date}`} className="project-text-form" id="project-end" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-estimate">Estimated Cost ($)</label>
                              <input type="text" name="estimatedCost" defaultValue={`${project.quote_cost}`} className="project-text-form" id="project-estimate" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="project-cost">Actual Cost ($)</label>
                              <input type="text" name="actualCost" defaultValue={`${project.actual_cost}`} className="project-text-form" id="project-cost" />
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
                              <select name="customer" defaultValue={`${project.customer_id}`} className="project-select-form" id="project-client" required >
                                  <option value="-1">None</option>
                                  {customers.map(customer => {
                                      return <option value={`${customer.id}`}>{customer.first_name} {customer.last_name}</option>
                                  })}
                              </select>
                            </div>
                          </div>
                          <p className="required-info">Fields marked with * are required.</p>
                          <input type="submit" name="submit" className="btn" id="project-submit" defaultValue="Confirm Changes" />
                        </div>
                    </form>
                    {/* End #client-add */}
                  </div>
                </div>
          </div>
      );
    }
}

EditProjectPage.propTypes = {
  project: PropTypes.array.isRequired
}

module.exports = {
    EditProjectPage: EditProjectPage
}

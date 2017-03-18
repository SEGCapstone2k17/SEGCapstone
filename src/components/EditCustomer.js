import React, {PropTypes, Component} from "react";
import {Header} from './Header';

class EditCustomerPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Clients" />
                <DashboardOther customer = {this.props.customer} />
            </div>
        )
    }
}

class DashboardOther extends Component {
    render() {
        const customer = this.props.customer[0];
        return (
            <div id="dashboard-other">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Edit Client</h2>
                    <form action="/api/editCustomer" method="POST">
                        <input type="hidden" name="id" value={`${customer.id}`}/>
                        <div id="client-add" className="dashboard-block">
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-first-name">First Name <span className="required">*</span></label>
                              <input type="text" name="fName" defaultValue={`${customer.first_name}`} className="client-text-form" id="client-first-name" required />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-last-name">Last Name <span className="required">*</span></label>
                              <input type="text" name="lName" defaultValue={`${customer.last_name}`} className="client-text-form" id="client-last-name" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-email">Email</label>
                              <input type="email" name="email" defaultValue={`${customer.email}`} className="client-text-form" id="client-email" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-phone">Phone Number <span className="required">*</span></label>
                              <input type="text" name="phone" maxLength="12" defaultValue={`${customer.telephone}`} className="client-text-form" id="client-phone" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-street">Street <span className="required">*</span></label>
                              <input type="text" name="street" defaultValue={`${customer.street}`} className="client-text-form" id="client-street" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-postal-code">Postal Code <span className="required">*</span></label>
                              <input type="text" name="postalCode" defaultValue={`${customer.postal_code}`} className="client-text-form" id="client-postal-code" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-city">City <span className="required">*</span></label>
                              <select name="city" defaultValue={`${customer.city}`} className="client-select-form" id="client-city" required>
                                <option value="Ottawa">Ottawa</option>
                              </select>
                            </div>
                          </div>
                          <p className="required-info">Fields marked with * are required.</p>
                          <input type="submit" name="submit" className="btn" id="client-submit" defaultValue="Confirm Changes" />
                        </div>
                    </form>
                    {/* End #client-add */}
                  </div>
                </div>
          </div>
      );
    }
}

EditCustomerPage.propTypes = {
    customer: PropTypes.array.isRequired
}

module.exports = {
    EditCustomerPage: EditCustomerPage
}

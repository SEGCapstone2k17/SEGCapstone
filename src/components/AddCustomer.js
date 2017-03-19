import React, {ProptTypes, Component} from 'react';
import {Sidebar} from './Sidebar';
import {Header} from './Header';

class AddCustomer extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
      document.title = "Add Customer";
    }

    render() {
        return (
            <div>
                <Sidebar is_customers_active = "active" />
                <div id="dashboard">
                    <Header title="Clients" />
                    <PageNavigation />
                    <DashboardOther />
                </div>
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
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="/customers">Search</a>
                  </li>
                  <li className="active">
                    <a href="/addCustomer">Add</a>
                  </li>
                </ul>
            </div>
        );
    }
}

class DashboardOther extends Component {
    render() {
        return (
            <div id="dashboard-other">
                <div className="row">
                  <div className="small-12 columns">
                    <h2>Add a New Client</h2>
                    <form action="/api/addCustomer" method="POST">
                        <div id="client-add" className="dashboard-block">
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-first-name">First Name <span className="required">*</span></label>
                              <input type="text" name="fName" className="client-text-form" id="client-first-name" required />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-last-name">Last Name <span className="required">*</span></label>
                              <input type="text" name="lName" className="client-text-form" id="client-last-name" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-email">Email</label>
                              <input type="email" name="email" className="client-text-form" id="client-email" />
                            </div>
                            <div className="small-12 medium-6 columns">
                              <label htmlFor="client-phone">Phone Number <span className="required">*</span></label>
                              <input type="text" name="phone" maxLength="12" className="client-text-form" id="client-phone" required />
                            </div>
                          </div>
                          <div className="row">
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-street">Street <span className="required">*</span></label>
                              <input type="text" name="street" className="client-text-form" id="client-street" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-postal-code">Postal Code <span className="required">*</span></label>
                              <input type="text" name="postalCode" className="client-text-form" id="client-postal-code" required />
                            </div>
                            <div className="small-12 medium-4 columns">
                              <label htmlFor="client-city">City <span className="required">*</span></label>
                              <select name="city" className="client-select-form" id="client-city" required>
                                <option value="Ottawa">Ottawa</option>
                              </select>
                            </div>
                          </div>
                          <p className="required-info">Fields marked with * are required.</p>
                          <input type="submit" name="submit" className="btn" id="client-submit" defaultValue="Add Client" />
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
    AddCustomer: AddCustomer
};

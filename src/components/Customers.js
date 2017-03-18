import React, {PropTypes, Component} from "react";
import {Header} from "./Header";

class ListCustomers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header title="Clients" />
                <PageNavigation />
                <DashboardOther customers = {this.props.customers} removeCustomer = {this.props.removeCustomer} />
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
                  <li className="active">
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

class DashboardOther extends Component {
    render() {
        const customers = this.props.customers;
        return (
            <div id="dashboard-other">
                    <div className="row">
                      <div className="small-12 columns">
                        <h2>Filter Results</h2>
                        <div id="client-filter" className="dashboard-block">
                          <div className="row">
                            <div className="small-12 large-8 columns">
                              <div id="client-search">
                                <form action="/customers/" method="GET" >
                                    <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                                    <input type="text" name="s" placeholder="Search for clients" />
                                </form>
                              </div>
                              {/* End project-search */}
                            </div>
                            <div className="small-12 large-4 columns">
                              <div id="client-refine">
                                <div className="client-refine-result">
                                  <select>
                                    <option>
                                      All Locations
                                    </option>
                                  </select>
                                </div>
                                {/* End refine-result */}
                              </div>
                              {/* End client-refine */}
                            </div>
                          </div>
                        </div>
                        {/* End dashboard-overview */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="small-12 large-8 columns">
                        <h2>Clients ({customers.length})</h2>
                        {customers.map(customer => {
                            return (
                                <div className="client-result dashboard-block">
                                  <div className="row">
                                    <div className="small-12 large-9 columns">
                                      <div className="client-result-info">
                                        <h3>{customer.first_name} {customer.last_name}</h3>
                                        <span><b>Location: </b>{customer.city}</span>
                                        <span><b>Email: </b>{customer.email}</span>
                                        <span><b>Telephone: </b>{customer.telephone}</span>
                                      </div>
                                      {/* End client-result-info */}
                                    </div>
                                    <div className="small-12 large-3 columns">
                                      <div className="client-result-actions">
                                        <a className="btn-dark" href={`/customers/${customer.id}`}>View Client</a>
                                        <a className="btn-dark" href={`/editCustomer/${customer.id}`}>Edit Client</a>
                                        <a className="btn-dark" onClick={(event) => this.props.removeCustomer(customer.id, event)}>Delete Client</a>
                                      </div>
                                      {/* End client-result-actions */}
                                    </div>
                                  </div>
                                </div>
                        );
                        })}
                      </div>
                      <div className="small-12 large-4 columns">
                        <div className="search-tips dashboard-block">
                          <h3>Did You Know?</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a cursus augue. Sed a euismod lorem. Pellentesque posuere molestie nisi vitae viverra. Etiam volutpat elit vel elit semper porttitor. Nam non eros nunc. Phasellus hendrerit felis tortor, at aliquet est scelerisque in. Aenean eget nibh a lacus iaculis tempor non ut magna.
                          </p>
                          <a href="#">Learn More</a>
                        </div>
                        {/* End search-tips */}
                      </div>
                    </div>
          </div>
      );
    }
}

ListCustomers.propTypes = {
  customers: PropTypes.array.isRequired
}

module.exports = {
    ListCustomers: ListCustomers,
    PageNavigation: PageNavigation
};

import React, { PropTypes, Component } from 'react';

class Summary extends React.Component {

    componentDidMount(){
        // functionality for later
    }

    render() {
        return (
                <div>
                    <Dashboard />
                </div>
        );
    }
}

class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">
              <div id="header" className="clearfix">
                  <div id="header-page-title">
                      <a href="#" id="sidebar-toggle"><i className="fa fa-bars" aria-hidden="true"></i></a>
                      <h1>Dashboard</h1>
                  </div>
                  {/* End header-page-title */}
                  <div id="header-user-actions">
                      <ul>
                          <li className="hide-for-small-only">
                              <a href="#">Help Center</a>
                          </li>
                          <li className="hide-for-small-only">
                              <a href="#">Notifications</a>
                          </li>
                          <li id="user-select">
                              <a href="#">Ryan Fitzgerald <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                              <ul className="rounded shadow-medium" id="user-dropdown">
                                  <li><a href="#" className="show-for-small-only">Help Center</a></li>
                                  <li><a href="#" className="show-for-small-only">Notifications</a></li>
                                  <li><a href="#">Settings</a></li>
                                  <li><a href="#">Sign Out</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  {/* End header-user */}
              </div>
              {/* End header */}

              <div id="dashboard-actions">
                  <div className="row">
                      <div className="small-12 columns">
                          <h2>Quick Actions</h2>
                          <div className="row small-up-1 medium-up-2 large-up-4">
                              <div className="column">
                                  <a href="/projects">
                                      <div className="quick-action rounded">
                                          <div className="qa-icon">
                                              <i className="fa fa-search" aria-hidden="true"></i>
                                          </div>
                                          {/* End qa-icon */}

                                          <div className="qa-text">
                                              <span>Search Projects</span>
                                          </div>

                                          {/* End qa-text */}
                                      </div>
                                  </a>
                              </div>
                              <div className="column">
                                  <a href="/addProject">
                                      <div className="quick-action rounded">
                                          <div className="qa-icon">
                                              <i className="fa fa-plus" aria-hidden="true"></i>
                                          </div>
                                          {/* End qa-icon */}
                                          <div className="qa-text">
                                              <span>Add Project</span>
                                          </div>
                                          {/* End qa-text */}
                                      </div>
                                  </a>
                              </div>
                              <div className="column">
                                  <a href="/customers">
                                      <div className="quick-action rounded">
                                          <div className="qa-icon">
                                              <i className="fa fa-search" aria-hidden="true"></i>
                                          </div>
                                          {/* End qa-icon */}
                                          <div className="qa-text">
                                              <span>Search Customers</span>
                                          </div>
                                          {/* End qa-text */}
                                      </div>
                                  </a>
                              </div>
                              <div className="column">
                                  <a href="/addCustomer">
                                      <div className="quick-action rounded">
                                          <div className="qa-icon">
                                              <i className="fa fa-plus" aria-hidden="true"></i>
                                          </div>
                                          {/* End qa-icon */}
                                          <div className="qa-text">
                                              <span>Add Customer</span>
                                          </div>
                                          {/* End qa-text */}
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* End dashboard-actions */}

              <div id="dashboard-other">
                  <div className="row">
                      <div className="small-12 large-6 columns">
                          <h2>Project Overview</h2>
                          <div id="dashboard-overview" className="rounded">
                              test
                          </div>
                          {/* End dashboard-overview */}
                      </div>
                      <div className="small-12 large-6 columns">
                          <h2>Client Overview</h2>
                          <div id="dashboard-notifications" className="rounded">
                              test
                          </div>
                          {/* End dashboard-notifications */}
                      </div>
                  </div>
              </div>
              {/* End dashboard-other */}
          {/* End dashboard */}
          </div>
      );
        }
}

module.exports = {
    Summary: Summary
};

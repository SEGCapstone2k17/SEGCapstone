import React, { PropTypes, Component } from 'react';
import {Sidebar} from './Sidebar';
import {Header} from './Header';

class Summary extends Component {
    render() {
        return (
                <div>
                    <Sidebar is_dashboard_active = "active" />
                    <div id="dashboard">
                        <Header title="Dashboard" />
                        <DashboardActions />
                        <DashboardOther />
                    </div>
                </div>
        );
    }
}

class DashboardActions extends Component {
    render() {
        return (
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
        );
    }
}

class DashboardOther extends Component {
    render() {
        return (
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
      );
        }
}

module.exports = {
    Summary: Summary
};

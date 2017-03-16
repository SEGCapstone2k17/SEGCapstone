/*jshint esversion: 6 */
import React, { PropTypes, Component } from 'react';
import {Header} from './Header';

class ListProjects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dashboard">
                <Header />
                <PageNavigation />
                <DashboardOther projects = {this.props.projects} />
            </div>
        );
    }
}

class PageNavigation extends Component {
    render(){
        return (
            <div id="page-navigation">
              <ul>
                <li>
                  <a href="/">Overview</a>
                </li>
                <li className="active">
                  <a href="/projects">Search</a>
                </li>
                <li>
                  <a href="/addProject">Add</a>
                </li>
              </ul>
              {/* End page-navigation */}
            </div>
        )
    }
}

class DashboardOther extends Component{
    render () {
        const projects = this.props.projects;
        return (
            <div id="dashboard-other">
               <div className="row">
                    <div className="small-12 columns">
                       <h2>Filter Results</h2>
                       <div id="project-filter" className="dashboard-block">
                           <div className="row">
                               <div className="small-12 large-6 columns">
                                   <div id="project-search">
                                       <form action="/projects" method="GET" >
                                       <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                       <input type="text" name="s" placeholder="Search for projects" />
                                       </form>
                                   </div>
                                   {/* End project-search */}
                               </div>
                               <div className="small-12 large-6 columns">
                                   <div id="project-refine">
                                       <div className="project-refine-result">
                                           <select>
                                               <option>
                                                   All Locations
                                               </option>
                                           </select>
                                       </div>
                                       {/* End refine-result */}
                                       <div className="project-refine-result">
                                           <select>
                                               <option>
                                                   All Types
                                               </option>
                                           </select>
                                       </div>
                                       {/* End refine-result */}
                                       <div className="project-refine-result">
                                           <select>
                                               <option>
                                                   All Statuses
                                               </option>
                                           </select>
                                       </div>
                                       {/* End refine-result */}
                                   </div>
                                   {/* End project-refine */}
                               </div>
                           </div>
                       </div>
                       {/* End dashboard-overview */}
                   </div>
               </div>
               <div className="row">
                   <div className="small-12 large-8 columns">
                       <h2>Projects (20)</h2>
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
                                               <a className="btn-dark" href="#">Edit Project</a>
                                               <a className="btn-dark" href="#">Delete Project</a>
                                           </div>
                                           {/* End project-result-actions */}
                                       </div>
                                   </div>
                               </div>
                               )
                        })}
                       {/* End project-result */}
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
                {/* End dashboard-other */}
            </div>
        )
    }
}

ListProjects.propTypes = {
  projects: PropTypes.array.isRequired
}

module.exports = {
    ListProjects: ListProjects
};

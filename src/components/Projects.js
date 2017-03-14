/*jshint esversion: 6 */
import React, { PropTypes, Component } from 'react'

class ListProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const projects = this.props.projects;
        return (
            <div>
                <h1>Projects!</h1>
                <form action="/projects/" method="GET" >
                    <input type="search" name="s" placeholder="Search for Project..."/>
                    <button type="submit" value="Submit">Search</button>
                </form>
                <div>

                    <div>
                        {projects.map(project => {
                          return <div>
                                    <a className="project-result" href={`/projects/${project.id}`}>
                                        <h3>{project.name}</h3>
                                        <p>
                                            {project.description}
                                        </p>
                                        <p>
                                            <strong>Cost:</strong>
                                            {project.quote_cost}$
                                        </p>
                                        <p>
                                            <strong>Customer:</strong>
                                            {project.customer_id ? (
                                                <a href={`/customers/${project.customer_id}`}> {project.first_name} {project.last_name}</a>
                                            ) :
                                            (
                                                <i>No customer selected...</i>
                                            )
                                            }
                                        </p>
                                    </a>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

ListProjects.propTypes = {
  projects: PropTypes.array.isRequired
}

module.exports = {
    ListProjects: ListProjects
};

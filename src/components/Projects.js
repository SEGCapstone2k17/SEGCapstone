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
                                    <a className="project-result" href={`/projects/${project.Project_ID}`}>
                                        <h3>{project.Name}</h3>
                                        <p>
                                            {project.Description}
                                        </p>
                                        <p>
                                            <strong>Cost:</strong>
                                            {project.Cost}$ {project.Currency}
                                        </p>
                                        <p>
                                            <strong>Customer:</strong>
                                            {project.Customer_ID ? (
                                                <a href={`http://localhost:3000/customers/${project.Customer_ID}`}> {project.First_Name} {project.Last_Name}</a>
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

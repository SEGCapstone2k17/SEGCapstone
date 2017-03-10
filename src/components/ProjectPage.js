/*jshint esversion: 6 */
import React, {PropTypes, Component} from "react";

class ProjectPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const project = this.props.project[0];
        return (
            <div>
                <h1>{project.Name}</h1>
                <div>
                    <p>
                      {project.Description}
                    </p>
                    <p>
                      <strong>Cost:</strong>
                      {project.Cost}$ {project.Currency}
                    </p>
                </div>
            </div>
        );
    }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired
}

module.exports = {
    ProjectPage: ProjectPage
};

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

class ProjectPageEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const project = this.props.project[0];
        const customers = this.props.customers;
        return (
            <div>
                <form action="/api/editProject/" method="POST">
                    <input type="hidden" name="id" value={`${project.Project_ID}`}/>
                    <br/><input required type="text" name="name" defaultValue={`${project.Name}`} placeholder="e.g. Floor Renovation"/><br/>
                    <input required type="number" name="cost" defaultValue={`${project.Cost}`} placeholder="Dollars (CAD)"/>
                    <select defaultValue={`${project.Currency}`} name="currency">
                        <option value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select><br/>
                    <select defaultValue={`${project.Customer_ID}`} name="customer">
                        <option value="-1">None</option>
                        {customers.map(customer => {
                            return <option value={`${customer.Customer_ID}`}>{customer.First_Name} {customer.Last_Name}</option>
                        })}
                    </select><br/>
                    <textarea required name="description" defaultValue={`${project.Description}`} placeholder="This project is about..."/><br/>
                    <button type="submit" value="Submit">Done</button>
                </form>
            </div>
        );
    }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired
}

module.exports = {
    ProjectPage: ProjectPage,
    ProjectPageEdit: ProjectPageEdit
};

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
                <h1>{project.name}</h1>
                <div>
                    <p>
                      {project.description}
                    </p>
                    <p>
                      <strong>Cost:</strong>
                      {project.quote_cost}$
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
        console.log(`Value of start date: ${project.start_date}`);
        return (
            <div>
                <form action="/api/editProject/" method="POST">
                    <input type="hidden" name="id" value={`${project.id}`}/>
                    <input required type="text" name="name" defaultValue={`${project.name}`} placeholder="e.g. Floor Renovation"/><br/>
                    <input required type="text" name="street" defaultValue={`${project.street}`} placeholder="e.g. Abc street"/><br/>
                    <input required type="text" name="postal_code" defaultValue={`${project.postal_code}`} placeholder="e.g. A1A 1A1"/><br/>
                    <input required type="text" name="city" defaultValue={`${project.city}`} placeholder="e.g. Abc City"/><br/>
                    <input required type="date" name="start_date" defaultValue={`${project.start_date}`}/><br/>
                    <input required type="date" name="end_date" defaultValue={`${project.end_date}`}/><br/>
                    <input required type="text" name="quote_cost" defaultValue={`${project.quote_cost}`} placeholder="100 (in dollars)"/><br/>
                    <input required type="text" name="actual_cost" defaultValue={`${project.actual_cost}`} placeholder="100 (in dollars)"/><br/>
                    <select defaultValue={`${project.customer_id}`} name="customer">
                        <option value="-1">None</option>
                        {customers.map(customer => {
                            return <option value={`${customer.id}`}>{customer.first_name} {customer.last_name}</option>
                        })}
                    </select><br/>
                    <textarea required name="description" defaultValue={`${project.description}`} placeholder="This project is about..."/><br/>
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

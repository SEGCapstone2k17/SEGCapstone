/*jshint esversion: 6 */
import React, {ProptTypes, Component} from 'react'

class AddProjectContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const customers = this.props.customers;
        return (
            <div>
                <h1>Add Project!</h1>
                <form action="/api/addProject/" method="POST">
                    <input required type="text" name="name" placeholder="e.g. Floor Renovation"/><br/>
                    <input required type="text" name="street" placeholder="e.g. Abc street"/><br/>
                    <input required type="text" name="postal_code" placeholder="e.g. A1A 1A1"/><br/>
                    <input required type="text" name="city" placeholder="e.g. Abc City"/><br/>
                    <input required type="date" name="start_date"/><br/>
                    <input required type="date" name="end_date"/><br/>
                    <input required type="text" name="quote_cost" placeholder="100 (in dollars)"/><br/>
                    <input required type="text" name="actual_cost" placeholder="100 (in dollars)"/><br/>
                    <select defaultValue="-1" name="customer">
                        <option value="-1">None</option>
                        {customers.map(customer => {
                            return <option value={`${customer.id}`}>{customer.first_name} {customer.last_name}</option>
                        })}
                    </select><br/>
                    <textarea required name="description" placeholder="This project is about..."/><br/>
                    <button type="submit" value="Submit">Add</button>
                </form>
            </div>
        );
    }
}

module.exports = {
    AddProjectContent: AddProjectContent
};

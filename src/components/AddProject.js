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
                    <input required type="number" name="cost" placeholder="Dollars (CAD)"/>
                    <select name="currency">
                        <option selected value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select><br/>
                    <select defaultValue="-1" name="customer">
                        <option value="-1">None</option>
                        {customers.map(customer => {
                            return <option value={`${customer.Customer_ID}`}>{customer.First_Name} {customer.Last_Name}</option>
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

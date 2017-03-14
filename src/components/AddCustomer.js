/*jshint esversion: 6 */
import React, {ProptTypes, Component} from 'react'

class AddCustomer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Add Customer!</h1>
                <form action="/api/addCustomer/" method="POST">
                    <input required type="text" name="first_name" placeholder="e.g. John"/><br/>
                    <input required type="text" name="last_name" placeholder="e.g. Smith"/><br/>
                    <input required type="text" name="telephone" placeholder="e.g. (000) 000 0000"/><br/>
                    <input required type="text" name="email" placeholder="e.g. jsmith@gmail.com"/><br/>
                    <input required type="text" name="street" placeholder="e.g. abc street"/><br/>
                    <input required type="text" name="postal_code" placeholder="e.g. A1A 1A1"/><br/>
                    <button type="submit" value="Submit">Add</button>
                </form>
            </div>
        );
    }
}

module.exports = {
    AddCustomer: AddCustomer
};

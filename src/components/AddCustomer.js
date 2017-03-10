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
                    <input required type="text" name="fname" placeholder="e.g. John"/>
                    <input required type="text" name="lname" placeholder="e.g. Smith"/>
                    <select name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option selected value="Undisclosed">Undisclosed</option>
                    </select>
                    <select name="title">
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option selected value="Undisclosed">Undisclosed</option>
                    </select>
                    <button type="submit" value="Submit">Add</button>
                </form>
            </div>
        );
    }
}

module.exports = {
    AddCustomer: AddCustomer
};

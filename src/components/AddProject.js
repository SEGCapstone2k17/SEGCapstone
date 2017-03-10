/*jshint esversion: 6 */
import React, {ProptTypes, Component} from 'react'

class AddProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Add Project!</h1>
                <form action="/api/addProject/" method="POST">
                    <input required type="text" name="name" placeholder="e.g. Floor Renovation"/>
                    <textarea required name="description" placeholder="This project is about..."/>
                    <input required type="number" name="cost" placeholder="Dollars (CAD)"/>
                    <select name="currency">
                        <option selected value="CAD">CAD</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                    <button type="submit" value="Submit">Add</button>
                </form>
            </div>
        );
    }
}

module.exports = {
    AddProject: AddProject
};

/*jshint esversion: 6 */
import React, {PropTypes, Component} from "react"

class ListCustomers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const customers = this.props.customers;
        return (
            <div>
                <h1>Customers!</h1>
                <form action="/customers/" method="GET" >
                    <input type="search" name="s" placeholder="Search for Customer..."/>
                    <button type="submit" value="Submit">Search</button>
                </form>
                <div>
                    {customers.map(customer => {
                      return <div>
                                <span>
                                    <strong>Name: </strong> {customer.First_Name} {customer.Last_Name}
                                </span>
                                <span>
                                  <strong> Gender: </strong> {customer.Gender}
                                </span>
                            </div>
                    })}
                </div>
            </div>
        );
    }
}

ListCustomers.propTypes = {
  customers: PropTypes.array.isRequired
}

module.exports = {
    ListCustomers: ListCustomers
};

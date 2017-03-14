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
                                <a className="customer-result" href={`/customers/${customer.id}`}>
                                <span>
                                    <strong>Name: </strong> {customer.first_name} {customer.last_name}
                                </span>
                                <span>
                                  <strong> email: </strong> {customer.email}
                                </span>
                                </a>
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

import React, {PropTypes, Component} from "react";

class CustomerPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const customer = this.props.customer[0];
        return (
            <div>
                <h1>{customer.first_name} {customer.last_name}</h1>
                <div>
                  <div>
                    <span>
                      <strong> email: </strong> {customer.email}
                    </span>
                </div>
                </div>
            </div>
        );
    }
}

class CustomerPageEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const customer = this.props.customer[0];
        return (
            <div>
                <form action="/api/editCustomer/" method="POST">
                    <input type="hidden" name="id" value={`${customer.id}`}/>
                    <input required type="text" name="first_name" defaultValue={`${customer.first_name}`} placeholder="e.g. John"/><br/>
                    <input required type="text" name="last_name" defaultValue={`${customer.last_name}`} placeholder="e.g. Smith"/><br/>
                    <input required type="text" name="telephone" defaultValue={`${customer.telephone}`} placeholder="e.g. (000) 000 0000"/><br/>
                    <input required type="text" name="email" defaultValue={`${customer.email}`} placeholder="e.g. jsmith@gmail.com"/><br/>
                    <input required type="text" name="street" defaultValue={`${customer.street}`} placeholder="e.g. abc street"/><br/>
                    <input required type="text" name="postal_code" defaultValue={`${customer.postal_code}`} placeholder="e.g. A1A 1A1"/><br/>
                    <button type="submit" value="Submit">Done</button>
                </form>
            </div>
        );
    }
}

CustomerPage.propTypes = {
  customer: PropTypes.array.isRequired
}

module.exports = {
    CustomerPage: CustomerPage,
    CustomerPageEdit: CustomerPageEdit
};

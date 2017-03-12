import React, {PropTypes, Component} from "react";

class CustomerPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const customer = this.props.customer[0];
        return (
            <div>
                <h1>{customer.First_Name} {customer.Last_Name}</h1>
                <div>
                  <div>
                    <span>
                      <strong> Gender: </strong> {customer.Gender}
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
                    <input type="hidden" name="id" value={`${customer.Customer_ID}`}/>
                    <input required type="text" name="fname" defaultValue={`${customer.First_Name}`} placeholder="e.g. John"/>
                    <input required type="text" name="lname" defaultValue={`${customer.Last_Name}`} placeholder="e.g. Smith"/>
                    <select defaultValue={`${customer.Gender}`} name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option selected value="Undisclosed">Undisclosed</option>
                    </select>
                    <select defaultValue={`${customer.Title}`} name="title">
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option selected value="Undisclosed">Undisclosed</option>
                    </select>
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

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

CustomerPage.propTypes = {
  customer: PropTypes.array.isRequired
}

module.exports = {
    CustomerPage: CustomerPage
};

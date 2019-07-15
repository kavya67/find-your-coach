import React from "react";

class CustomerAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h3>Username: {this.props.user.username}</h3>
                <p>Role: {this.props.user.role}</p>
            </div>
        )
    }
}

export default CustomerAccount
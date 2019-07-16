import React from "react";
import {Link} from "react-router-dom";

class CustomerAccount extends React.Component {
    render() {
        return(
            <div className="container pt-sm-5">
                <div className="card" style={{width:'25rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.customer.username}</h5>
                        <p className="card-text">{this.props.customer.role}</p>
                        <Link to="/customer/account/edit"className="btn btn-primary">Update Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerAccount
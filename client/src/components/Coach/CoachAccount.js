import React from "react";
import {Link} from "react-router-dom";

class CoachAccount extends React.Component {

    render() {
        return(
            <div className="container pt-sm-5">
            <div className="card" style={{width:'25rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.coach.username}</h5>
                    <p className="card-text">{this.props.coach.role}</p>
                    <Link to="/coach/account/edit"className="btn btn-primary">Update Profile</Link>
                </div>
            </div>
            </div>
        )
    }
}

export default CoachAccount
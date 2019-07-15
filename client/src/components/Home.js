import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className="container pt-sm-5">
               <div className="jumbotron" >
               <div class="card border-dark mb-3" style={{width: "25rem"}}>
               
                    <div class="card-body text-dark">
                        <h5 class="card-title">Welcome Pal!</h5>
                        <p class="card-text">This is an application where an individual or a group can hire a  coach based on their learning interests. The user has the flexibility to choose/book a coach based on the coaches lists who are filtered based on individual interests.</p>
                        <Link to="/customer/register" className="btn btn-outline-dark btn-lg">Get a coach</Link> 
                        <span> </span>
                        <Link to = "/coach/register" className="btn btn-outline-dark btn-lg">Become a Coach</Link>
                    </div>
                    </div>
                    
               
               </div>
            </div>
        )
    }
}

export default Home
import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/customer/register">Get a coach</Link> <br/>
                <Link to = "/coach/register">Become a Coach</Link>
            </div>
        )
    }
}

export default Home
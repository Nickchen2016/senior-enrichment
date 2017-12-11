import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render(){
        return (
            <div id= "navBar">
                <div className="title">
                    <h2>
                        <Link to="/"> 🔱 <span>Margaret Hamilton Academy</span></Link>
                    </h2>
                    </div>
                    <div className="title">
                    <h3>
                        <Link className="bottom" to="/campus">Campuses</Link>
                    </h3>
                    </div>
                    <div className="title">
                    <h3>
                        <Link className="bottom" to="/students">Students</Link>
                    </h3>
                </div>
            </div>
        )
    }
}
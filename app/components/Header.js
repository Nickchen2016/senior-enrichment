import React, {Component} from 'react';


export default class Header extends Component {
    render(){
        return (
            <div>
                <button type="button">Campuses</button>
                <button type="button">Students</button>
            </div>
        )
    }
}
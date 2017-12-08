import React, { Component } from 'react';
import axios from 'axios';
import Campuses from './Campuses';


export default class StatefullCamp extends Component{
    constructor(){
        super();
        this.state = {
            campuses: []
        };
    }

componentDidMount (){
    axios.get('/api/campus')
    .then(res => res.data)
    .then(campuses => this.setState({ campuses }));
}

    render(){
        const campuses = this.state.campuses;
    return(
        <Campuses campuses = {campuses}/>
    );
    }
} 
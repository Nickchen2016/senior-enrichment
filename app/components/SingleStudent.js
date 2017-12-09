import React, { Component } from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {
    constructor (){
        super();
        this.state = {
            student: {}
        };
    }

    componentDidMount (){
        const studentId = this.props.match.params.studentId;

        axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student }));
    }

    render(){
        const student = this.state.student;

        return (
            <div className="single-camp">
            <div className="left">
                <div className = "camp-value">
                    <h4>{campus.name}</h4>
                    <h4>{campus.description}</h4>
                </div>
            </div>
            <div className="right">
                <div>


                </div>
            </div>
        </div>
        )
    }
}
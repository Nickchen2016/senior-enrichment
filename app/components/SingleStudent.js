import React, { Component } from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {
    constructor (){
        super();
        this.state = {
            student: {}
        };
        console.log('----------',this.state.student)
    }

    componentDidMount (){
        const studentId = this.props.match.params.studentId;

        axios.get(`/api/student/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student }));
    }

    render(){
        const student = this.state.student;
        
        return (

            <div className="single-camp">
            {/* <div className="left">
                <div className = "camp-value">
                    <h4>{student.id}</h4>
                    <h4>{student.name}</h4>
                    <h4>{student.email}</h4>
                    <h4>{student.gpa}</h4>
                </div>
            </div>
            <div className="right">
                <div>


                </div>
            </div> */}
            <h3>ytcyitc</h3>
        </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    
        axios.get(`/api/student/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student: student[0] }));
    }

    render(){
        const student = this.state.student;
        const campus = this.state.student.campus;
        // console.log('----------',student)

        return (

            <div className="single-camp">
            <div className="left">
                <div className = "stu-value" key={student.id}>

                    <div className="list-topic-1"><h3 id="stu-name">{student.name}</h3></div>
                    <div className="list-topic-1"><h3>ID <span>{student.id}</span></h3></div>
                    <div className="list-topic-1"><h3>Email <span>{student.email}</span></h3></div>
                    <div className="list-topic-1"><h3>GPA <span>{student.gpa}</span></h3></div>    
                </div>
            </div>
            <div className="right">
            <Link to={`/campus/${student.campusId}`}>
                <img src = { campus && campus.imageUrl } />
                <div className = "camp-value">
                <h4>{ campus && campus.name}</h4>
                <h4>{ campus && campus.description}</h4>
            </div>
            </Link>
            </div> 
            
        </div>
        )
    }
}
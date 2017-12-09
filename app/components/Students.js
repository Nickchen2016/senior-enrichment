import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
    constructor () {
        super();
        this.state = {
            students : []
        };
    }

    componentDidMount(){
        axios.get('/api/student')
        .then(res => res.data)
        .then(students => this.setState({students}));

    }

    render(){

        const students = this.state.students;

        return(
        <div className="studentsList">
            <div className="name">
                <h1>Students</h1>
                <h1>List of All Students({students.length})</h1>
            </div>
            <div className="list">
                <div className="list-title">
                    <div className="list-topic stu1"><h3>ID</h3></div>
                    <div className="list-topic"><h3>Students Name</h3></div>
                    <div className="list-topic"><h3>Campus</h3></div>
                    <div className="list-topic"><h3>GPA</h3></div>
                    <div className="list-topic"><h3>Email</h3></div>
                </div>

               {students.map(student=>{
                 return(
                    <div className="list-title-1" key={student.id}>
                        <div className="list-topic-1 stu2">{student.id}</div>
                        <div className="list-topic-1">{student.name}</div>
                        <div className="list-topic-1">{student.campus.name}</div>
                        <div className="list-topic-1">{student.gpa}</div>
                        <div className="list-topic-1">{student.email}</div>
                    </div>
                 )
               })}
            </div>
        </div>
        );
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
    constructor () {
        super();
        this.state = {
            students : [],
            campuses: [],
            firstName:'',
            lastName:'',
            email:'',
            campusId: 1,
            isDirty: true
        };
        
        //this.handleClick = this.handleClick.bind(this);
        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.campusChange = this.campusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    componentDidMount(){
        axios.get('/api/student')
        .then(res => res.data)
        .then(students => this.setState({students}));
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => this.setState({campuses}));
    }

    firstNameChange(event){
        this.setState({
          firstName: event.target.value,
          isDirty: true
        });
    }

    lastNameChange(event){
        this.setState({
          lastName: event.target.value
          
        });
    }

    emailChange(event){
        this.setState({
          email: event.target.value
          
        });
    }

    campusChange(event){
        // {console.log('-------------',event.target.value)}
        this.setState({
            campusId: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.addStudent({firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        campusId: this.state.campusId
                    })
        
        this.setState({
          firstName: '',
          lastName:'',
          email: '',
          campusId: 1,
          isDirty: false
        });
      }

      addStudent(newStudent){
        axios.post('/api/student', newStudent)
        .then(res => res.data)
        .then(student => this.setState({ students:[...this.state.students, student] }));
        
    }


    // handleClick(){ //delete handle
    //               const campusId = this.props.match.params.campusId;
    //               axios.delete(`/api/campus/${campusId}`);
    //              }
    

    render(){
        const students = this.state.students;
        const campuses = this.state.campuses;
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
                    <div className="list-topic"></div>
                </div>

               { students && students.map(student=>{
                 return(
                     <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                    <div className="list-title-1" >
                        <div className="list-topic-1 stu2">{student.id}</div>
                        <div className="list-topic-1">{student.name}</div>
                        <div className="list-topic-1">{student.name}</div>
                        <div className="list-topic-1">{student.gpa}</div>
                        <div className="list-topic-1">{student.email}</div>
                        <div className="list-topic-1">{
                            <button
                            type="delete"
                            className="button3"
                            onClick={this.handleClick}
                            >x</button>
                        }</div>
                    </div>
                    </Link>
                    </div>
                    // <div>{console.log('---------', student.campus.name)}</div>
                 )
               })}


            <div id="add-stu">
                <h1>Add New Student </h1>
                <form className="school-info" onSubmit={this.handleSubmit}>
                    <div className="input-titles">
                       
                        <input 
                        className="stu-name"
                        type="text"
                        placeholder="First Name"
                        onChange= {this.firstNameChange}
                        value={this.state.firstName}
                        />
                        <input 
                        className="stu-name"
                        type="text"
                        placeholder="Last Name"
                        onChange= {this.lastNameChange}
                        value={this.state.lastName}
                        />
                        <input 
                        className="stu-email"
                        type="text"
                        placeholder="Email"
                        onChange= {this.emailChange}
                        value={this.state.email}
                        />
                        
                        <select onChange={this.campusChange} className="campuses">
                        { campuses && campuses.map(campus=>{
                            return(
                                <option 
                                key={campus.id}
                                value={campus.id}>{campus.name}
                                </option>
                                
                            )})}
                        </select>
                        
                        
                        <button
                        className="submit-input"
                        type="submit">+</button>
                    </div>
                </form>
            </div>



            </div>
        </div>
        );
    }
}
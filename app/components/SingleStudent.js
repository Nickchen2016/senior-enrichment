import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {
    constructor (){
        super();
        this.state = {
            student: [],
            campuses: [],
            firstName:'',
            lastName:'',
            email:'',
            gpa:'',
            campusId: 1,
            isDirty: true
        };

        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.campusChange = this.campusChange.bind(this);
        this.gpaChange = this.gpaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    componentDidMount (){
        const studentId = this.props.match.params.studentId;
    
        axios.get(`/api/student/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({ student }));
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

    gpaChange(event){
        this.setState({
          gpa: event.target.value
          
        });
    }

    campusChange(event){
         //{console.log('-------------',event.target.value)}
        this.setState({
            campusId: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.addStudent({firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        gpa: this.state.gpa,
                        campusId: this.state.campusId
                    })
    
        this.setState({
          firstName: '',
          lastName:'',
          email: '',
          gpa:'',
          campusId: 1,
          isDirty: false
        });
      }

      addStudent(newStudent){
        const studentId = this.props.match.params.studentId;
        axios.put(`/api/student/${studentId}`, newStudent)
        .then(res => res.data)
        .then(student => this.setState({ student }));
        
    }



    render(){
        const student = this.state.student;
        const campus = this.state.student.campus;
        const campuses = this.state.campuses;
         console.log('----------',campuses)

        return (

            <div className="single-camp">
            <div className="left">
                <div className = "stu-value" key={student.id}>

                    <div className="list-topic-1"><h3 id="stu-name">{student.name}</h3></div>
                    <div className="list-topic-1"><h3>ID <span>{student.id}</span></h3></div>
                    <div className="list-topic-1"><h3>Email <span>{student.email}</span></h3></div>
                    <div className="list-topic-1"><h3>GPA <span>{student.gpa}</span></h3></div>   

                    <div className="update-stu">
                <h1>Update Student Info </h1>
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
                        <input 
                        className="stu-gpa"
                        type="text"
                        placeholder="GPA"
                        onChange= {this.gpaChange}
                        value={this.state.gpa}
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCamp extends Component {
    constructor (){
        super();
        this.state = {
            campus : {},
            name: '',
            imageUrl: '',
            description: '',
            isDirty: false
        };
        //this.handleClick = this.handleClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.imgChange = this.imgChange.bind(this);
        this.desChange = this.desChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCampus = this.updateCampus.bind(this);
    }

    componentDidMount () {
        const campusId = this.props.match.params.campusId;

        axios.get(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({ campus }));
    }

    // handleClick(event){ //delete handle
    //     event.preventDefault();
    //     const campusId = this.props.match.params.campusId;
    //     axios.delete(`/api/campus/${campusId}`, this.state.campus);
        
    // }

    nameChange(event){
        this.setState({
          name: event.target.value,
          isDirty: true
        });
    }
    
    imgChange(event){
        this.setState({
          imageUrl: event.target.value
        });
    }
    
    desChange(event){
        this.setState({
          description: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.updateCampus({
                        name: this.state.name,
                        imageUrl: this.state.imageUrl,
                        description: this.state.description})
        
        this.setState({
          name: '',
          imageUrl: '',
          description: '',
          isDirty: false
        });
      }

    updateCampus(newCampus){ // 2 things done at once. we update the new data in the db & setState to trigger auto-reload the page
        const campusId = this.props.match.params.campusId;
        axios.put(`/api/campus/${campusId}`, newCampus)
        .then(res => res.data)
        .then(campus => this.setState({ campus })); //the 'campus' come back from db is the newly updated data
    } 


    render () {
        const campus = this.state.campus;
        const students = this.state.campus.students;

        //console.log('----------',campus)

        return (
            <div className="single-camp">
                <div className="left">
                    <img src = { campus.imageUrl } />
                    <div className = "camp-value">
                        <h1>{campus.name}</h1>
                        <h4>{campus.description}</h4>
                        <form className="school-info" onSubmit={this.handleSubmit}>
                            <input 
                            className="camp-name"
                            type="text"
                            placeholder="Change Campus Name"
                            onChange= {this.nameChange}
                            value={this.state.name}
                            />
                            <input 
                            className="camp-img"
                            type="text"
                            placeholder="Change Campus Image"
                            onChange= {this.imgChange}
                            value={this.state.imageUrl}
                            />
                            <input 
                            className="camp-des"
                            type="text"
                            placeholder="Change Campus Description"
                            onChange= {this.desChange}
                            value={this.state.description}
                            />
                            <button
                            type="update"
                            className="button1"
                            onClick={this.handleClick}
                            >Update</button>
                            
                        </form>
                        <form onSubmit={this.handleClick}>
                        <button
                            type="delete"
                            className="button2"
                            
                            >Delete</button> 
                        </form>
                        
                    </div>
                </div>
                <div className="right">

                    <div className="list-title">
                        <div className="list-topic"><h3>ID</h3></div>
                        <div className="list-topic"><h3>Students Name</h3></div>
                        <div className="list-topic"><h3>GPA</h3></div>
                        <div className="list-topic"><h3>Email</h3></div>
                    </div>
                    <div>

                    {   students && students.map(student => {
                            return(
                                <div key={student.id}>
                                <Link to={`/students/${student.id}`}>
                                <div className="list-title-1">
                                    <div className="list-topic-1">{student.id}</div>
                                    <div className="list-topic-1">{student.name}</div>
                                    <div className="list-topic-1">{student.gpa}</div>
                                    <div className="list-topic-1">{student.email}</div>
                                </div>
                                </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Campusese extends Component{
    constructor(){
        super();
        this.state = {
            campuses: [],
            name: '',
            imageUrl:'',
            description:'',
            isDirty: false
        };
    this.nameChange = this.nameChange.bind(this);
    this.imgChange = this.imgChange.bind(this);
    this.desChange = this.desChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCampus = this.addCampus.bind(this);
    }
    
componentDidMount (){
    axios.get('/api/campus')
    .then(res => res.data)
    .then(campuses => this.setState({ campuses }));
}

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
    this.addCampus({name: this.state.name,
                    imageUrl: this.state.imageUrl,
                    description: this.state.description})
    
    this.setState({
      name: '',
      imageUrl: '',
      description: '',
      isDirty: false
    });
  }

addCampus(newCampus){
    axios.post('/api/campus', newCampus)
    .then(res => res.data)
    .then(campus => this.setState({ campuses:[...this.state.campuses, campus] }));
    {console.log('-------------',this.state.campuses)}
}

    render (){
        const campuses = this.state.campuses;
        return (
        <div>
            <div className="camps-title">
                <h1>Campuses</h1>
                <h1>List Of All Campuses({campuses.length})</h1>
            </div>
            <div id= "content" >
              { campuses.map(campus => {
                    return (
                            <div className = "school" key={ campus.id } >
                            <Link to={`/campus/${campus.id}`}>
                                    <img src = {campus.imageUrl} />
                                <div className = "campus-info">
                                    <h4>{campus.name}</h4>
                                </div>
                            </Link>
                            </div>
                    )
                })
              }
            </div>

            <div id="add-camp">
                <h1>Create New Campus </h1>
                <form className="school-info" onSubmit={this.handleSubmit}>
                    <div className="input-titles">
                        <input 
                        className="camp-name"
                        type="text"
                        placeholder="Campus Name"
                        onChange= {this.nameChange}
                        value={this.state.name}
                        />
                        <input 
                        className="camp-img"
                        type="text"
                        placeholder="Campus Image Url"
                        onChange= {this.imgChange}
                        value={this.state.imageUrl}
                        />
                        <input 
                        className="camp-descrip"
                        type="text"
                        placeholder="Campus Info"
                        onChange= {this.desChange}
                        value={this.state.description}
                        />
                        <button
                        className="submit-input"
                        type="submit">+</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

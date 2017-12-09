import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCamp extends Component {
    constructor (){
        super();
        this.state = {
            campus : {}
        };
    }

    componentDidMount () {
        const campusId = this.props.match.params.campusId;

        axios.get(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({ campus }));
    }

    render () {
        const campus = this.state.campus;
        console.log(this.state.campus)

        return (
            <div className="single-camp">
                <div className="left">
                    <img src = { campus.imageUrl } />
                    <div className = "camp-value">
                        <h4>{campus.name}</h4>
                        <h4>{campus.description}</h4>
                    </div>
                </div>
                <div className="right">

                    <div className="list-title">
                        <div className="list-topic stu1"><h3>ID</h3></div>
                        <div className="list-topic"><h3>Students Name</h3></div>
                        <div className="list-topic"><h3>Campus</h3></div>
                        <div className="list-topic"><h3>GPA</h3></div>
                        <div className="list-topic"><h3>Email</h3></div>
                    </div>
                  
                </div>
            </div>
        )
    }
}
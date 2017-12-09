import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Campuses(props){

        const campuses = props.campuses;
        return (
        <div>
            <div>
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
                <label>Create New Campus </label>
                <form className="school-info">
                    <div className="input-titles">
                        <input 
                        className="camp-name"
                        type="text"
                        placeholder="Campus Name"
                        />
                        <input 
                        className="camp-name"
                        type="text"
                        placeholder="Campus Image Url"
                        />
                        <button
                        className="submit-input"
                        type="submit"

                        >+</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }

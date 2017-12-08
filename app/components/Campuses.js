import React, { Component } from 'react';
import axios from 'axios';


export default function Campuses(props){

        const campuses = props.campuses;
        return (
            <div id= "content" >
              { campuses.map(campus => {
                    return (
                        <div className = "school" key={ campus.id } >
                                <img src = {campus.imageUrl} />
                            <div className = "campus-info">
                                <h4>{campus.name}</h4>
                            </div>
                        </div>
                    )
                })
              }
            </div>
        )
    }

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import SingleCamp from './SingleCamp';
import Students from './Students';
import SingleStudent from './SingleStudent';
import Header from './Header';

export default class Main extends Component {

    render(){
        return (
           <Router>
            <div>               
               <div className="nav">
                   <Header />
               </div>
               <div>
                   <Switch>
                       <Route exact path="/" component={Home} />
                       <Route exact path="/campus" component={Campuses} />
                       <Route path="/campus/:campusId" component={SingleCamp} />
                       <Route exact path="/students" component={Students} />
                       <Route path="/students/:studentId" component={SingleStudent} />
                       <Route component={Home} />
                   </Switch>
               </div>
            </div>
           </Router> 
        );
    }
}
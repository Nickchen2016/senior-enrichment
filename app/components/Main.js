import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefullCamp from './StatefullCamp';
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
                       <Route exact path="/campus" component={StatefullCamp} />
                       <Route path="/campus/:campusId" component={SingleCamp} />
                       <Route exact path="/students" component={Students} />
                       <Route path="/students/:studentId" component={SingleStudent} />
                       <Route component={StatefullCamp} />
                   </Switch>
               </div>
            </div>
           </Router> 
        );
    }
}
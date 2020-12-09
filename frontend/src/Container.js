import React from "react";
import { Switch, Route,withRouter } from "react-router";
import Home from './Home';
import Malls from './Malls';
import Resort from './Resort';
import Gym from './Gym';
import CinemaHall from './CinemaHall';
import Restaurants from './Restaurants';
import Gaming from './Gaming';
function Container() {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cinema" component={CinemaHall} />
          <Route path="/malls" component={Malls} />
          <Route path="/gym" component={Gym} />
          <Route path="/resort" component={Resort} />
          <Route path="/restaurants" component={Restaurants}/>
          <Route path="/gaming" component={Gaming} />



        </Switch>
  );
}


export default withRouter(Container);

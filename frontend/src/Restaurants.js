import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      restaurants:[]
    }
    componentDidMount() {
      const q = this.props.location.state
      axios.get("http://localhost:5000/restaurants/"+q+"")
        .then(res => {
          const restaurants = res.data;
          this.setState({restaurants});
          console.log("Location Selected:"+q);
        })
    }

    render(){
    return(
        <div>
        <div className='header'>
          <p>Restaurants in {this.props.location.state}</p><br/><br/>
        </div>
          {
            this.state.restaurants.map(restaurant =>
             <div className="center">
             <img src={images[restaurant._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {restaurant.name}<br/>
             Location: {restaurant.location}<br/>
             Veg or Non-Veg: {restaurant.type}<br/>
             Cuisine: {restaurant.cuisine}<br/>
             Budget:{restaurant.budget}<br/>
             Rating: {restaurant.rating}<br/>
             Address:{restaurant.address}<br/>
             Google Map Link: <a href={restaurant.google_map_link} style={{color: 'yellow'}}>{restaurant.name}</a><br/>
             Contact: {restaurant.phone_number}<br/>
             <br/><br/></div>)
           }
           <div className="float-home">
           <a href="/"><button className="dropdown">BACK TO HOMEPAGE</button></a>
           <br/><br/>
        </div>
        </div>
    );
}
}

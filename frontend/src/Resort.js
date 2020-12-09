import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      resorts:[]
    }
    componentDidMount() {
         axios.get("http://localhost:5000/resorts")
        .then(res => {
          const resorts = res.data;
          this.setState({resorts});
          console.log("Resorts in Bangalore");
        })
    }

    render(){
    return(
        <div>
        <div className='header'>
          <p>Resorts in Bengaluru</p><br/><br/>
        </div>
          {
            this.state.resorts.map(resort =>
             <div className="center">
             <img src={images[resort._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {resort.name}<br/>
             Amenities: {resort.amenities}<br/>
             Budget:{resort.budget}<br/>
             Rating: {resort.rating}<br/>
             Address:{resort.address}<br/>
             Google Map Link: <a href={resort.google_map_link} style={{color: 'yellow'}}>{resort.name}</a><br/>
             Contact: {resort.phone_number}<br/>
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

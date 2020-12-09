import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      gamings:[]
    }
    componentDidMount() {
      const q = this.props.location.state
      axios.get("http://localhost:5000/gaming/"+q+"")
        .then(res => {
          const gamings = res.data;
          this.setState({gamings});
          console.log("Location Selected:"+q);
        })
    }

    render(){
    return(
        <div>
        <div className='header'>
          <p>Sports & Gaming in {this.props.location.state}</p><br/><br/>
        </div>
          {
            this.state.gamings.map(gaming =>
             <div className="center">
             <img src={images[gaming._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {gaming.name}<br/>
             Location: {gaming.area}<br/>
             Number of People: {gaming.No_of_People}<br/>
             Sport or Activity: {gaming.sport}<br/>
             Budget:{gaming.budget}<br/>
             Rating: {gaming.rating}<br/>
             Address:{gaming.address}<br/>
             Google Map Link: <a href={gaming.google_map_link} style={{color: 'yellow'}}>{gaming.name}</a><br/>
             Contact: {gaming.phone_number}<br/>
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

import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      gyms:[]
    }
    componentDidMount() {
      const q = this.props.location.state
      axios.get("http://localhost:5000/gyms/"+q+"")
        .then(res => {
          const gyms = res.data;
          this.setState({gyms});
          console.log("Location Selected:"+q);
        })
    }

    render(){
    return(
        <div>
        <div className='header'>
          <p>Gyms in {this.props.location.state}</p><br/><br/>
        </div>
          {
            this.state.gyms.map(gym =>
             <div className="center">
             <img src={images[gym._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {gym.name}<br/>
             Location: {gym.location}<br/>
             Budget:{gym.budget}<br/>
             Rating: {gym.rating}<br/>
             Address:{gym.address}<br/>
             Google Map Link: <a href={gym.google_map_link} style={{color: 'yellow'}}>{gym.name}</a><br/>
             Contact: {gym.phone_number}<br/>
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

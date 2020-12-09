import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      malls:[]
    }
    componentDidMount() {
      const q = this.props.location.state
      axios.get("http://localhost:5000/malls/"+q)
        .then(res => {
          const malls = res.data;
          this.setState({malls});
          console.log("Location Selected:"+q);
        })
    }

    render(){
          return(
        <div>
        <div className='header'>
          <p>Malls in {this.props.location.state}</p><br/><br/>
        </div>
          {
            this.state.malls.map(mall =>
             <div className="center">
             <img src={images[mall._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {mall.name}<br/>
             Location: {mall.location}<br/>
             Rating: {mall.rating}<br/>
             Food Court Availability: {mall.food_court}<br/>
             Address:{mall.address}<br/>
             Google Map Link: <a href={mall.google_map_link} style={{color: 'yellow'}}> {mall.name}</a><br/>
             <br/><br/></div>)
           }
           <div className="float-home">
           <a href="/"><button className="dropdown">BACK TO HOMEPAGE</button></a>
           <br/><br/>
        </div></div>
    );
}
}

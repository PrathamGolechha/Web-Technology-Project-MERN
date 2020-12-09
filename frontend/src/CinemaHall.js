import React from "react";
import images from './Image'
import axios from 'axios';
import './App.css';
export default class App extends React.Component {
    state = {
      cinemas:[]
    }
    componentDidMount() {
      const q = this.props.location.state
      axios.get("http://localhost:5000/cinema/"+q+"")
        .then(res => {
          const cinemas = res.data;
          this.setState({cinemas});
          console.log("Location Selected:"+q);
        })
    }

    render(){
    return(
        <div>
        <div className='header'>
          <p>Cinema Halls in {this.props.location.state}</p><br/><br/>
        </div>
          {
            this.state.cinemas.map(cinema =>
             <div className="center">
             <img src={images[cinema._id]} alt="Sample" width="300" height="300" align="left" hspace="25" />
             Name: {cinema.name}<br/>
             Location: {cinema.location}<br/>
             Screen Type: {cinema.type}<br/>
             Movie Languages: {cinema.language}<br/>
             Budget:{cinema.budget}<br/>
             Rating: {cinema.rating}<br/>
             Address:{cinema.address}<br/>
             Google Map Link: <a href={cinema.google_map_link} style={{color: 'yellow'}}>{cinema.name}</a><br/>
             Contact: {cinema.phone_number}<br/>
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

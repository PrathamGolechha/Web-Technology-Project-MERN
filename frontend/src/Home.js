import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
import {withRouter} from 'react-router';

function Home() {
  const history=useHistory();
  const [location,setLocation] = useState("");
  const [activity,setActivity] = useState("");

  const handleLocationChange=(e)=>{
    setLocation(e.target.value);
  }

  const handleActivityChange=(e)=>{
    setActivity(e.target.value);
  }

  const validate = ()=>{
    if(activity === "resort")
      return false;
    else if(location!=="" && activity!=="")
      return false;
    return true
  }
  return (
      <div className='main'>
        <div className='header'>
          <p>Welcome to WhereWeGo.com</p>
        </div>
        <div className='maincontent'>
        <h4>Looking for something fun to do in Bengaluru? Search no more! You're at the right place!
          Our website recommends you recreational options to
           visit when you are in BENGALURU based on your interest </h4>
        <div className="content">
          <p>Are you near any of these locations?</p>
        </div>
        <select
          className="dropdown"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">--Select a Location--</option>
          <option value ="MG Road">MG Road</option>
          <option value ="Indiranagar">Indiranagar</option>
          <option value ="Kormangala">Kormangala</option>
          <option value ="Jayanagar">Jayanagar</option>
          <option value ="Basavanagudi">Basavanagudi</option>
          <option value ="Banashankri">Banashankri</option>
          <option value ="JP Nagar">JP Nagar</option>
          <option value ="Frazer Town">Frazer Town</option>
          <option value ="Whitefield">Whitefield</option>
          <option value ="Electronic City">Electronic City</option>
        </select>
        <div className="content">
          <p>If yes then choose what you want to do for the day from the wide range of activities and we will recommend the best choices</p>
        </div>
        <div className="float-div">
        <select className="dropdown"
          value={activity}
          onChange={handleActivityChange}
        >
          <option value="">--Select an activity--</option>
          <option value ="malls">Malls & Shopping Complexes</option>
          <option value ="gym">Gym</option>
          <option value ="cinema">Cinema</option>
          <option value ="restaurants">Restaurants</option>
          <option value ="resort">Resorts</option>
          <option value ="gaming">Gaming & Sports</option>
        </select>
        </div>
        <div className="float-button">
        <button className="go"
        disabled ={validate()}
        onClick={()=>history.push(`/${activity}`,location)}
        >GO!</button>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      </div>

  );
}

export default withRouter(Home);

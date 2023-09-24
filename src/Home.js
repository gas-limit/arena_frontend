// Home.js
import React from 'react';
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function Home() {
  return (

  <div className='arenaLayout center'>
  <br/>
  <br/>
  <Link to="./Explore">
  <button className='enterButton'>
  <h1>Enter the Arena</h1>
  </button>
  </Link>
 
  <br/>
  <br/>
  <br/>
  
  <br/>
  <h2>Watch NFTs duke it out</h2>
  <br/>
  <br/>
  Current Active Arena

  <br/>

  <img src="https://pbs.twimg.com/profile_images/1547342101083525127/-25FryT4_400x400.png"/>
  <br/>
  wtf
  <br/>
  <br/>
  <br/>
  
  </div>
  );
}

export default Home;

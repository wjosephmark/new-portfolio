import React, { useState, useEfffect } from 'react';
// import Typist from 'react-typist';
import {navigate} from "hookrouter"

export default function App(){

  return (
    <div className='home-app'>
      
      <div className="nav-wrapper">
          <div className="nav-buttons-wrapper">
              <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
              <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
              <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
              <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
          </div>
      </div>

      <div className="content-wrapper">
        <div className="top-line" />

        {/* <div class="typewriter-app">
          <h1>Hello, welcome to my portfolio!</h1>
        </div> */}

        <div className="glitch-wrapper">
          <div title="Hello, welcome to my portfolio">Hello, welcome to my portfolio</div>
        </div>

        <div className="bottom-line" />
        
      </div>

    </div>
  );
}
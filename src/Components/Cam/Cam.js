import React, { Component } from 'react';
import image from './Cam.png';
import video from './Cam.mp4';
import './Cam.css';

class Cam extends Component {

  render() {
    return (
      <div className="Cam">
        <video className="CamVideo" autoPlay loop poster={image}>
           <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default Cam;

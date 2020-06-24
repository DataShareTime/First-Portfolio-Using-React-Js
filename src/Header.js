import React, { Component } from 'react'
import pic from "./images/yellow.jpg"
import './Header.css';

 const myStyles ={
  backgroundImage: `url( ${pic} )` ,
  height: '80vh',
  backgroundSize: 'cover'
}
export default class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
        <p>A Free Bootstrap Theme by Start Bootstrap</p>
    <a href="#button" >{this.props.button}</a>
      </header>
    )
  }
}







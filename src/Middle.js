import React, { Component } from 'react'
import "./Middle.css"

export default class Middle extends Component {
    render() {
        return (
            <div className="middle">
            <h3>{this.props.mheading}</h3>  
             <p>{this.props.mpara}</p>
            <a href="#">{this.props.button}</a>
            </div>
        )
    }
}

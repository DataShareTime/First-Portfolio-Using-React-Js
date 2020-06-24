import React, { Component } from 'react';
import "./Navigation.css";

export default class Navigation extends Component {
    render() {

        const sections = ['Home','About','Portfolio','Contact','Services'];
        const navLinks  = sections.map(section=>{
        return (<li><a href={'#' + section}>{section}</a></li>)
        });
        return (
            <nav>
               <h2 className="Logo">{this.props.logoTitle}</h2>
               <ul>
               {navLinks} 
               </ul>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation';
import Middle from './Middle'
import Services from './Services'

export default class App extends Component {
    render() {
        return (
            <div>
               
                <Navigation logoTitle="React Project"/>
                <Header title="Stylish Portfolio" button="Find Out More"/>
                <Middle mheading="Stylish Portfolio is the perfect theme for your next Project!" 
                mpara="This theme features a flexible, UX friendly sidebar menu and stock photos from our friendly at Unsplash!" button="What We Offer"/>
                <Services />
               
                
            </div>
        )
    }
}

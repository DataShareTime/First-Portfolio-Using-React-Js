import React, { Component } from 'react';
import "./Services.css";
export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3>services</h3>
                <h2>What We Offer</h2>

            <div className="row">
             <Icons  myIcons={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
             <Icons  myIcons={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
             <Icons  myIcons={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
             <Icons  myIcons={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
                </div>

            </div>
        )
    }
}
const iconObj =[
    {
        icon:  <ion-icon name="phone-portrait-outline"></ion-icon>,
        title:  "Responsive",
        description:  "Looks great on any screen size!"
    },{
        icon:  <ion-icon name="brush-outline"></ion-icon>,
        title:  "Redesigned",
        description:  "Freshly redisgned for Bootstrap"
    },{
        icon: <ion-icon name="thumbs-up-outline"></ion-icon>,
        title: "Favourited",
        description: "Millions of users starts Bootstrap"
    },{
        icon: <ion-icon name="help-outline"></ion-icon>,
        title: "Question",
        description: "I have a Question"
    }
];
class Icons extends Component {
    render() {
        return (
            <div>
        <span>{this.props.myIcons}</span> 
        <h4>{this.props.myTitle}</h4>
        <p>{this.props.myDescription}</p>
            </div>
        )
    }
}


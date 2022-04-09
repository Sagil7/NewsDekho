import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl,newsurl} = this.props;
    return (
       
      <div className='my-2' >  
    <div className="card" >
  <img src={!imageUrl?"https://c.ndtvimg.com/2022-04/v5vmac6g_bangladesh-players-umpire-afp_625x300_05_April_22.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    
      </div>
    )
  }
}

export default NewsItem

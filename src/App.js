
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <div>
    
     
    <Navbar/>
     
     <Routes>
     
    <Route path="/" element= {<News key="general" pagesize={6} country="in" category="general"/> }/>
    <Route path="business" element= {<News key="business" pagesize={6} country="in" headline="Buisness" category="business"/> }/>
    <Route path="entertainment" element= {<News key="entertainment" pagesize={6} country="in" headline="Entertainment" category="entertainment"/> }/>
    <Route path="health" element= {<News key="health" pagesize={6} country="in" headline="Health" category="health"/> }/>
    <Route path="science" element= {<News key="science" pagesize={6} country="in" headline="Science" category="science"/> }/>
    <Route path="sports" element= {<News key="sports" pagesize={6} country="in" headline="Sports" category="sports"/> }/>
    <Route path="technology" element= {<News key="technology" pagesize={6} country="in" headline="Technology" category="technology"/> }/>

          
          
     </Routes>
     
     
    
         </div>
      
    )
  }
}


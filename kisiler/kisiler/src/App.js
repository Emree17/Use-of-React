import React, { Component } from 'react'
import './App.scss';
import Navbar from './component/navbar/navbar';
import TourList from './component/navbar/Tourlist/TourList';



class App extends Component {
  render() {
    return (
      <React.Fragment>
       
       <Navbar/>
       <TourList/>

      </React.Fragment>
    );
  }
}

export default App;


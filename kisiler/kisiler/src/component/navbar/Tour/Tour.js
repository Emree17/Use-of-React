import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
    state=
    {
        showInfo:false
    };

    hanhleInfo = () =>
    {
        this.setState(
            {
                showInfo: !this.state.showInfo
            }
        );
    }

   
  render() {
    const {id,city,img,name,info}=this.props.tour;
    const {remouveTour}=this.props;
    return (
      <article className='tour' >
        <div className='img-container' >
            <img src= {img}  alt=''/>
            <span className='close-btn' >
            <i classname="fa-solid fa-rectangle-xmark" />
            </span>
        </div>
        <div className='tour-info' >  
            <h3>{city}</h3>
            <h4> {name} </h4>
            <h5>
            info
            <span onClick={this.hanhleInfo} >
            <i classname="fa-solid fa-square-caret-down"></i>
            </span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
            
            
        </div>
      </article>
    )
  }
}

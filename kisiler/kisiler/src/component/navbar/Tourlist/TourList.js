import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import { tourData } from '../../../tourData'
import "./TourList.scss";


export default class TourList extends Component {
    state={
        tours:tourData
    };

    remouveTour = id =>
    {
        console.log(id);
    }
  render() {
    //console.log(this.state.tours);
    const {tours}=this.state
    return (
        <section className='tourList' >
        {
            tours.map(tour=> (
                    <Tour key={tour.id} tour={tour} remouveTour={this.remouveTour}/>
                ))
        }
     
        </section> 
    )
  }
}

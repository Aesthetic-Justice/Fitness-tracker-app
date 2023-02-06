// import React,{ Component } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// const events = [{title:"Today", date: new Date()}];
// export class Kalendar extends Component {
//     render(){
//         return (
//             <div className="container">
//                 <div className="row title" style={{ marginTop: "20px"}}>
//                     <div class= "col-sm-12 btn btn-info">Calendar</div>
//                 </div>
//                 <FullCalendar defaultview="dayGridMonth" plugins={[dayGridPlugin]} events={events}/>
//             </div>

            
//         )
//     }
// }

// export default Kalendar

import "./calendar.css";
import calendarImg from "../assets/calendarImg.png";
import React, { Component } from "react";

class Kalendar extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
        <img src={calendarImg} alt="CalendarImg" className="calendar-img" />
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Kalendar;
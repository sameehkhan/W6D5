import React from 'react';

// import ReactDOM from 'react-dom';

 class Clock extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      time:new Date()
    };
    
    this.tick = this.tick.bind(this);
  }
  // 
  tick(){
    this.setState({time: new Date()});
  }
  // 
  componentDidMount() {
     this.intervalId = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
   clearInterval(this.intervalId);
 }

  getHours () {
    let hours = this.state.time.getHours();
    return (hours < 10) ? `0${hours}` : hours; 

  }
  
  getMins () {
    let mins = this.state.time.getMinutes();
    return (mins < 10) ? `0${mins}` : mins; 
  }
    
  getSecs () {
    let secs = this.state.time.getSeconds();
    return (secs < 10) ? `0${secs}` : secs;
  }
  
  getDate () {
    return this.state.time.getDate();
  }
  
  render () {
    var month = this.state.time.getUTCMonth() + 1; //months from 1-12
    var day = this.state.time.getUTCDate();
    var year = this.state.time.getUTCFullYear();
    return (
      <div>
      <span className="titles"> <h1>Clock</h1></span>
      <div className="mainClock">
      <div className="clock">
      <h2>Time:    {this.getHours()}:{this.getMins()}:{this.getSecs()}</h2></div>
      <div className="clock"><h2>Date:    {month}/{day}/{year}</h2>
      </div>
      </div>
      </div>
      
    );
  }
  
  
  
}

export default Clock;
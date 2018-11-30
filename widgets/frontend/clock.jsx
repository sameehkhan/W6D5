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
     this.intervalId = setInterval(this.tick(), 1000);
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
  
  render () {
    return (
      <div class="clock">
      <h1>Clock</h1>
      <h3>{this.getHours()}:{this.getMins()}:{this.getSecs()}</h3>
      </div>
    );
  }
  
  
  
}

export default Clock;
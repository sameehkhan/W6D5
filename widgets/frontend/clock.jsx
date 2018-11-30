import React from 'react';
import ReactDOM from 'react-dom';

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

  // getHours () {
  //   return this.state.time.getHours();
  // }
  // 
  // getMins () {
  //   return this.state.time.getMinutes();
  // }
  // getSecs () {
  //   return this.state.time.getSeconds();
  // }
  
  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return (
      <div>
      <h1>Clock</h1>
      <h3>{hours}:{minutes}:{seconds}</h3>
      </div>
    );
  }
  
  
  
}

export default Clock;
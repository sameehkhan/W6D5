import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      time:new Date()
    };
  }

  tick(){
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
   
  }

  
  render () {
    return (
      <div>
      <h1>Clock</h1>
        setInterval(this.tick(), 3000);
      </div>
    );
  }
  
  
  
}

export default Clock;
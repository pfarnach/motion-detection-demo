import React, { Component } from 'react';
import { create } from 'diffyjs';
import { throttle } from 'lodash';
import { flow, flatten, some } from 'lodash/fp';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      motionDetected: false,
      motionHistory: []
    };

    this._calcDiff = throttle(this.calcDiff.bind(this), 50);
  }

  calcDiff(matrix) {
    const recentMotion = some(v => v, this.state.motionHistory);
    const motionDetected = flow(
      flatten,
      some(v => v < 210 && v !== 0)
    )(matrix);

    // Reduce false negatives by checking if there was recently a motion even if current iteration says there was none
    this.setState({
      motionDetected: recentMotion || motionDetected,
      motionHistory: [...this.state.motionHistory.slice(-15), motionDetected]
    });
  }

  componentDidMount() {
    create({
      resolution: { x: 15, y: 10 },
      sensitivity: 0.2,
      threshold: 25,
      debug: true,
      containerClassName: 'my-diffy-container',
      sourceDimensions: { w: 130, h: 100 },
      onFrame: this._calcDiff
    });
  }
  render() {
    return (
      <div
        className="main"
        style={{ backgroundColor: this.state.motionDetected ? 'green' : 'red' }}
      />
    );
  }
}

export default App;

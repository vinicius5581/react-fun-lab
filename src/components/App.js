import React from 'react';
import './App.css';
import ElevatorControlPanel from './ElevatorControlPanel';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { id: 1, label: '1 floor', isOn: false },
        { id: 2, label: '2 floor', isOn: false },
        { id: 3, label: '3 floor', isOn: false },
        { id: 4, label: '4 floor', isOn: false },
      ]
    }
  }

  render() {
    return (
      <div className="App" >
        App
        <ElevatorControlPanel
          buttons={this.state.buttons}
        />
      </div>
    );
  }
}

export default App;

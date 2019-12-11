import React, {Component} from 'react';
import './App.css';
import InputBox from './containers/InputBox'

class App extends Component {
  render(){
  return (
    <div>
    <h1>Mortgage Calculator</h1>
    <InputBox />
    </div>
  );
}
}

export default App;

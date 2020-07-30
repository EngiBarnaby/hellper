import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'


class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <Todo />
      </div>
    );
  }
}

export default App;

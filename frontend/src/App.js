import React, { useState } from 'react';
import './App.css';

import Todo from './components/Todo'
import Calc from './calculator/Calculator'
import Weather from './weather/Weather'
import Statistics from "./statistics/statistics"

function App(){
  const [currentTool, setCurrentTool] = useState(2) 

  function renderElement(num){
    if(num === 1){
      return <Todo />
    }
    else if(num === 2){
      return <Statistics />
    }
    else if(num === 3){
      return <Calc />
    }
  }


    return (
      <div>
          <div className="App row justify-content-center tools">
            <div className="col-1">
              <i className="far fa-list-alt fa-3x m-2" onClick={() => setCurrentTool(1)}></i>
            </div>
            <div className="col-1">
              <i className="fas fa-chart-line fa-3x m-2" onClick={() => setCurrentTool(2)} ></i>
            </div>
            <div className="col-1">
              <i className="fas fa-calculator fa-3x m-2" onClick={() => setCurrentTool(3)} ></i>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-3 mr-5">
                <Weather />
            </div>
          </div>
        <div>
          { renderElement(currentTool) }
        </div>
      </div>
    )
}

export default App;

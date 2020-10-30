import React from 'react';
import {today, is_it_friday} from "./utils";
import './index.css';


function App() {
  return (
    <div className="App">
      <div className="Date">
        {today()}
      </div>

      <div className="Title">
        今天是周五吗
      </div>

      <div className="Desc">
        {is_it_friday()}
      </div>
    </div>
  );
}

export default App;

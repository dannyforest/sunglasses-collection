import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  useEffect(() => {
    axios({
      method: 'post',
      headers:  {
        'Content-Type': 'application/json'
      },
      url: 'https://ke6ifmsbt8.execute-api.us-east-1.amazonaws.com/dev/sunglasses/?brand=Ray-Ban'
    }).then(res => {
      console.log(res.data);
    })
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

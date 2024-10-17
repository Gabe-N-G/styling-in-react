import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//you can call it whatever you like if its a default export.
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
// src/App.jsx
// Later on, we'll import button components here

const App = () => {
  return (
      <div className="App">
        
          // Add all example components:
          <Button1 buttonText="Example 1" />
          <Button2 buttonText="Example 2" />
          //...
        
      </div>
  );
};

export default App;

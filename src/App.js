import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      //showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled", "success");
    }
  }




  return (
    <>
    

  <Navbar title="Text Utils" aboutText="About Us " mode={mode} toggleMode={toggleMode}/>
  <div className="container my-4">
  <TextForm heading="Enter the Text To Analyze"  mode={mode}/>

  </div>

  </>
  );
}

export default App;

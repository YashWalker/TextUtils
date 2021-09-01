import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    

  <Navbar title="Text Utils" aboutText="About Us "/>
  <div className="container my-4">
  <TextForm heading="Enter the Text To Analyze" />

  </div>

  </>
  );
}

export default App;

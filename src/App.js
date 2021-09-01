import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    

  <Navbar title="Text Utils" aboutText="About Us "/>
  <div className="container">
  <TextForm heading="Enter the Text To Analyze" my-3/>

  </div>

  </>
  );
}

export default App;

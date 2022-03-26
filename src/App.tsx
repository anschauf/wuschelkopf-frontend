import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";

function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar toggleIsOpen={toggleIsOpen}/>
            Hello world
        </BrowserRouter>

    </div>
  );
}

export default App;

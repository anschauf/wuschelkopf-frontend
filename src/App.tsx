import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            Hello world
        </BrowserRouter>

    </div>
  );
}

export default App;

import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <BrowserRouter>
            <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            <NavBar toggleIsOpen={toggleIsOpen}/>
            <MainPage />
            <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;

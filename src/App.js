import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content '>
                    <Route path='/profile' render={() => <Profile posts={props.state.posts}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs messages={props.state.messages} dialogs={props.state.dialogs}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.store.getState().sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.store.getState().profilePage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 newPostText={props.store.getState().profilePage.newPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.store.getState().dialogsPage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}
                                                                   newMessageText={props.store.getState().dialogsPage.newMessageText}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import TitleText from './components/Header/TitleText';

const App = (props) => {

  return (
  <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <TitleText />
        <Navbar />
        <div class='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
            <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

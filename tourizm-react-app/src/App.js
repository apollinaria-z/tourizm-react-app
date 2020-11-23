import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from "react-router-dom";
import TitleText from './components/Header/TitleText';

const App = (props) => {

  return (

    <div className='app-wrapper'>
        <Header />
        <TitleText />
        <Navbar />
        <div className='app-wrapper-content'>
             <Route path='/mainpage' component={MainPage}/>
            <Route path='/dialogs'
                    render={() => <
                        Dialogs store={props.store} state={props.state.dialogPage}/>}/>
            <Route path='/profile'
                    render={() => <Profile
                                    profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                                    />}/>
        </div>
    </div>
  );
}

export default App;

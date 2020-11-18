import './App.css';
import Header from './components/Header/Header';
import HeaderTitle from './components/Header/HeaderTitle';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <HeaderTitle />
        <div class='app-wrapper-content'>
                    <Route path='/mainpage' component={MainPage}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/registration' component={Registration}/>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import HeaderTitle from './components/Header/HeaderTitle';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import OfferList from './components/Offers/OfferList';
import CustomerList from './components/Customers/CustomerList';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (

    <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <HeaderTitle />
        <div class='app-wrapper-content'>
                    <Route path='/mainpage' component={MainPage}/>
                    <Route path='/login' component={LogIn}/>
                    <Route path='/registration' render={() =>
                                                <Registration registerCustomer={props.registerCustomer}/>}/>
                    <Route path='/customerlist'
                           render={() => <CustomerList
                                      customerData={props.state.customerData} />}/>
                      <Route path='/offerlist'
                            render={() => <
                                     OfferList offerData={props.state.offerData}/>}/>
        </div>
    </div>

  );
}

export default App;

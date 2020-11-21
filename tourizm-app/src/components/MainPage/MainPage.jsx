import React from 'react';

const MainPage = () => {

    const loginClick = () => {
        //window.location.assign('http://localhost:3001/login');
    }
    let registerClick = () => {
        //window.location.assign('http://localhost:3001/registration');
    }

    return(
        <div>
            <div>You can watch our tourist offers after log in or registration</div>
            <div>
                <button onClick={loginClick}>LogIn Page</button>
                <button onClick={registerClick}>Registration Page</button>
            </div>
        </div>
    );
}

export default MainPage;
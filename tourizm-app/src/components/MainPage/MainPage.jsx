import React from 'react';

const MainPage = () => {

    const loginClick = () => {
        document.location.href = "/login";
    }
    let registerClick = () => {
        document.location.href = "/registration";
    }

    return(
        <div>
            <h4>You can watch our tourist offers after log in or registration</h4>
            <div>
                <button onClick={loginClick}>LogIn Page</button>
                <button onClick={registerClick}>Registration Page</button>
            </div>
        </div>
    );
}

export default MainPage;
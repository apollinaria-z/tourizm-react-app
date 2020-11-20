import React from 'react';

const MainPage = () => {

    let loginClick = () => {

    }
    let registerClick = () => {

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
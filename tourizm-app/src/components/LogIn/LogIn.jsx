import React from 'react';

const LogIn = () => {

    let newCustomer = React.createRef();

    let addCustomer = () => {
                let text = newCustomer.current.value;
                alert(text  + ' welcome');
    }

    return(
        <div>
            <h3>Login area</h3>

            <textarea ref={newCustomer}></textarea>
            <h5>enter your login</h5>
            <textarea></textarea>
            <h5>enter your password</h5>
            <button onClick={addCustomer}>Log in customer</button>
        </div>
    );
}

export default LogIn;

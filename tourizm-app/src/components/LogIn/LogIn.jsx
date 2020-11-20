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
            <h4>enter your login</h4>
            <textarea></textarea>
            <h4>enter your password</h4>
            <button onClick={addCustomer}>Log in customer</button>
        </div>
    );
}

export default LogIn;

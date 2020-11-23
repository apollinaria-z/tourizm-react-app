import React from 'react';

const Registration = (props) => {

    let newCustomerLogin = React.createRef();
    let newCustomerName = React.createRef();

    let registerCustomer = () => {
           let newlogin = newCustomerLogin.current.value;
           let newname = newCustomerName.current.value;
           let newCustomer = {
                   login: newlogin,
                   name: newname,
               };
           props.registerCustomer(newCustomer);
           newCustomerLogin.current.value = '';
           newCustomerName.current.value = '';

    }

    return(

        <div>
             <h3>Registration area</h3>

             <textarea ref={newCustomerLogin}></textarea>
             <h4>enter new login</h4>
             <textarea ref={newCustomerName}></textarea>
             <h4>enter new name</h4>
             <textarea></textarea>
             <h4>enter new password</h4>
             <button onClick={registerCustomer }>Register customer</button>
        </div>
    );
}

export default Registration;
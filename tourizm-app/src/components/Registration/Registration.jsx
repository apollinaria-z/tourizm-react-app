import React from 'react';

const Registration = () => {

    let newCustomer = React.createRef();

    let addCustomer = () => {
           let text = newCustomer.current.value;
           alert(text  + ' was added to customer base.');
    }

    return(

        <div>
             <h3>Registration area</h3>

             <textarea ref={newCustomer}></textarea>
             <h4>enter new login</h4>
             <textarea></textarea>
             <h4>enter new password</h4>
             <button onClick={addCustomer}>Register customer</button>
        </div>
    );
}

export default Registration;
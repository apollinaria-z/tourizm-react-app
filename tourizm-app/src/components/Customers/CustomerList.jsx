import React from 'react';
import Customer from './Customer';
import s from './Customer.module.css';

const CustomerList = (props) => {

    let allCustomers =
                props.customerData.map(data => <Customer
                                       id={data.id}
                                       login={data.login}
                                       name={data.name}/>);

    return (
        <div>
            <div className={s.styles}>Our dear customers:</div>
            <div>{allCustomers} </div>
        </div>
    );
}

export default CustomerList;
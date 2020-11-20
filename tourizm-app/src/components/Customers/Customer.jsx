import React from 'react';
import s from './Customer.module.css';

const Customer = (props) => {

        return(
        <li className={s.styles}>
             {' login: ' + props.login + ', name: ' + props.name}
        </li>
        )
}

export default Customer;
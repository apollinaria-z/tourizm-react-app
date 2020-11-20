import React from 'react';
import s from './Offer.module.css';

const Offer = (props) => {

        return(
        <ul className={s.styles}>
             {props.id + '. ' + props.country + ': price $ ' + props.price}
        </ul>
        )
}

export default Offer;
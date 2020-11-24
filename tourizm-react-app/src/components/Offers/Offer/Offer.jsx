import React from 'react';
import s from './../OfferList.module.css';

const Offer = (props) => {
    return (
        <ul className={s.offer}>
            { props.country + ': price $ ' + props.price}
        </ul>
    );
}

export default Offer;
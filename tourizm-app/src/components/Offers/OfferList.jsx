import React from 'react';
import Offer from './Offer';
import s from './Offer.module.css';

const OfferList = (props) => {

    let allOffers = props.offerData.map(
                    data => <Offer
                                    id={data.id}
                                    country={data.country}
                                    price={data.price}/>);

    return (
    <div>
        <div className={s.styles}>Offers:</div>
        <div> {allOffers} </div>
    </div>
    );
}

export default OfferList;
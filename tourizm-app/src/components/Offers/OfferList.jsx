import React from 'react';
import Offer from './Offer';

const OfferList = (props) => {

    let allOffers = props.offerData.map(
                    data => <Offer
                                    id={data.id}
                                    country={data.country}
                                    price={data.price}/>);

    return (
        <div> {allOffers} </div>
    );
}

export default OfferList;
import React from 'react';
import OfferList from './OfferList';

const OffersPage = (props) => {

    return(
    <div>
            <OfferList offerData={props.offerPage.offerData}
                      dispatch={props.dispatch}
                      newOfferCountry={props.offerPage.newCountryInfo}
                      newOfferPrice={props.offerPage.newPriceInfo}
                      />
    </div>
    );
}

export default OffersPage;
import React from 'react';
import s from './OfferList.module.css';
import Offer from './Offer/Offer';
import {addOfferCreator,
        updateNewOfferCountryCreator,
        updateNewOfferPriceCreator} from '../../redux/offer-reducer';

const OfferList = (props) =>{

    let offerElements = props.offerData.map(
        el => <Offer country={el.country} price={el.price}/>);

    let newOfferCountry = React.createRef();
    let newOfferPrice = React.createRef();

    let onAddOfferClick = () => {
                props.dispatch(addOfferCreator());
    }

    let onOfferCountryChange = () => {
         let newCountry = newOfferCountry.current.value;
         props.dispatch(updateNewOfferCountryCreator(newCountry));
         }
       let onOfferPriceChange = () => {
             let newPrice = newOfferPrice.current.value;
           props.dispatch(updateNewOfferPriceCreator(newPrice));
          }

    return(
        <div className={s.offerList}>
            <div className={s.offers}>
                <div>{offerElements}</div>
             </div>
             <div className={s.addOffer}>
                <div>
                    <textarea value={props.newCountryInfo}
                    onChange={onOfferCountryChange}
                    ref={newOfferCountry}
                    placeholder="Enter country"></textarea></div>
                <div>
                <div>
                    <textarea value={props.newPriceInfo}
                    onChange={onOfferPriceChange}
                    ref={newOfferPrice}
                    placeholder="Enter price"></textarea>
                </div>
                <div>
                    <button onClick={ onAddOfferClick } >add offer to agency</button></div>
                </div>
             </div>
        </div>
    )
}

export default OfferList;
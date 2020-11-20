import React from 'react';

const styles = {
    color: '#66CDAA'
    }

const Offer = (props) => {

        return(
        <ul style={styles}>
             {props.id + '. ' + props.country + ': price $ ' + props.price}
        </ul>
        )
}

export default Offer;
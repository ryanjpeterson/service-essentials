import React from 'react';
import './part-listing.styles.scss';

const PartListing = ({ partNumber, description, src }) => (
    <div className='part-listing'>
        <img src={src} alt={partNumber} />
        <h2 className='part-listing__number'>{partNumber}</h2>
        <span className='part-listing__description'>{description}</span>
    </div>
);

export default PartListing;
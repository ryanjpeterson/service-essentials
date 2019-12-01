import React from 'react';

import PartListing from '../part-listing/part-listing.component';

import './parts-overview.styles.scss';

const PartsOverview = ({ parts }) => (
    <div className='parts-overview'>
        {
            parts.map(part => 
                <PartListing
                    key={part.partNumber}
                    partNumber={part.partNumber}
                    description={part.description}
                />
            )
        }
    </div>
);

export default PartsOverview;
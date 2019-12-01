import React from 'react';

import SectionFilterButton from '../section-filter-button/section-filter-button.component';

import './section-filter-overview.styles.scss';

const SectionFilterOverview = ({ categorySubsections }) => (
        <div className='section-filters-overview'>
            {
                categorySubsections.map(subsecton => <SectionFilterButton filterName={subsecton} />)
            }
        </div>
    );    

export default SectionFilterOverview;
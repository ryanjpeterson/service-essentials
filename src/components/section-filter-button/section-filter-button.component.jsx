import React from 'react';

import './section-filter-button.styles.scss';

const SectionFilterButton = ({ filterName }) => (
    <button className='section-filter__button'>
        {filterName}
    </button>
);

export default SectionFilterButton;
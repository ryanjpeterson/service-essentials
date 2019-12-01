import React from 'react';

import './section-filter-button.styles.scss';

const SectionFilterButton = ({ filterName, filterPartsBySubsection }) => {
    return(
        <button id={filterName} onClick={filterPartsBySubsection} className='section-filter__button'>
            {filterName}
        </button>
    );
}

export default SectionFilterButton;
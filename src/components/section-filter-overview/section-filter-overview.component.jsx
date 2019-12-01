import React from 'react';

import SectionFilterButton from '../section-filter-button/section-filter-button.component';

import './section-filter-overview.styles.scss';

const SectionFilterOverview = ({ categorySubsections, filterPartsBySubsection }) => (
        <div className='section-filters-overview'>
            <SectionFilterButton 
                key='showAll'
                filterName='Show All'
                filterPartsBySubsection={filterPartsBySubsection}
            />
            {
                categorySubsections.map(subsection => 
                <SectionFilterButton
                    key={subsection}
                    filterName={subsection}
                    filterPartsBySubsection={filterPartsBySubsection}
                />)
            }
        </div>
    );    

export default SectionFilterOverview;
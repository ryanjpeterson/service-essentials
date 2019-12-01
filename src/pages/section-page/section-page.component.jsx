import React from 'react';
import './section-page.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import PartsOverview from '../../components/parts-overview/parts-overview.component';
import SectionFilterOverview from '../../components/section-filter-overview/section-filter-overview.component';

import { data } from '../../data'; 

const SectionPage = ({ sectionTitle }) => {
    const sectionParts = data.filter(arr => arr.section === sectionTitle);
    const categorySubsections = 
        sectionParts
            .map(arr => arr.category)
            .reduce((unique, subsection) => unique.includes(subsection) ? unique : [...unique, subsection], []);

    return(
        <div className='section-page'>
            <SectionTitle sectionTitle={sectionTitle} />
            <SectionFilterOverview categorySubsections={categorySubsections} />
            <PartsOverview parts={sectionParts} />
        </div>
    );    
}
export default SectionPage;
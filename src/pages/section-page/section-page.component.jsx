import React from 'react';
import './section-page.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import PartsOverview from '../../components/parts-overview/parts-overview.component';
import SectionFilterOverview from '../../components/section-filter-overview/section-filter-overview.component';

import { data } from '../../data';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);

        const sectionParts = data.filter(arr => arr.section === this.props.sectionTitle);
        const categorySubsections = sectionParts
            .filter(arr => arr.section === this.props.sectionTitle)
            .map(arr => arr.category)
            .reduce((unique, subsection) => unique.includes(subsection) ? unique : [...unique, subsection], []);
        const renderedParts = sectionParts

        this.state = 
        {   
            sectionParts: sectionParts,
            categorySubsections: categorySubsections,
            renderedParts: renderedParts
        };    

        // optional .bind for filterPartsBySubsection
        // this.filterPartsBySubsection = this.filterPartsBySubsection.bind(this);
    }

    filterPartsBySubsection = (e) => {
        const categoryId = e.target.id;

        this.setState({ 
            renderedParts: 
                categoryId === 'Show All' ?
                    data.filter(arr => arr.section === this.props.sectionTitle) :
                    this.state.sectionParts.filter(part => part.category === categoryId),
        });
    }

    selectRandomParts() {
        const randArr = [];

        for (let i = 0; i < 12; i++) {
            randArr.push(data[Math.floor(Math.random() * data.length)]);
        }

        return randArr;
    }

    render() {
        const randParts = this.selectRandomParts();

        return(
            <div className='section-page'>
                <SectionTitle sectionTitle={this.props.sectionTitle} />
                {
                    this.props.sectionTitle !== 'Overview' ?                 
                        <SectionFilterOverview filterPartsBySubsection={this.filterPartsBySubsection} categorySubsections={this.state.categorySubsections} />

                        :

                        <PartsOverview parts={randParts} />
                }
                <PartsOverview parts={this.state.renderedParts} />
            </div>
        );
    }
}

export default SectionPage;
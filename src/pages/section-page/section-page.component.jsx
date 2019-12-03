import React from 'react';
import './section-page.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import PartsOverview from '../../components/parts-overview/parts-overview.component';
import SectionFilterOverview from '../../components/section-filter-overview/section-filter-overview.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import { data } from '../../data';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);

        const sectionParts = this.props.sectionTitle === 'Index' ?
            data : data.filter(arr => arr.section === this.props.sectionTitle);
        const categorySubsections = sectionParts
            .filter(arr => arr.section === this.props.sectionTitle)
            .map(arr => arr.category)
            .reduce((unique, subsection) => unique.includes(subsection) ? unique : [...unique, subsection], []);
        const renderedParts = this.props.sectionTitle === 'Index' ? data : sectionParts;

        this.state = 
        {   
            sectionParts: sectionParts,
            categorySubsections: categorySubsections,
            renderedParts: renderedParts,
            searchQuery: '',
        };    
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

    onSearchBarInput = (e) => {
        const searchValue = e.target.value;
        
        searchValue === '' ?
            this.setState({
                searchQuery: searchValue,
                renderedParts: this.state.sectionParts
            })

            :

            this.setState({
                searchQuery: searchValue,
                renderedParts: this.state.sectionParts
                    .filter(part => 
                        part.description.toLowerCase()
                            .includes(this.state.searchQuery.toLowerCase()) 
                            
                            ||

                        part.partNumber
                            .includes(this.state.searchQuery)
                )});
    }

    render() {
        return(
            <div className='section-page'>
                <SectionTitle sectionTitle={this.props.sectionTitle} />
                <SearchBar onSearchBarInput={this.onSearchBarInput} />
                {

                    this.props.sectionTitle !== 'Index' ?                 
                        <SectionFilterOverview filterPartsBySubsection={this.filterPartsBySubsection} categorySubsections={this.state.categorySubsections} />

                        :

                        undefined
                }
                <PartsOverview parts={this.state.renderedParts} />
            </div>
        );
    }
}

export default SectionPage;
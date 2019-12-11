import React from 'react';
import './section-page.styles.scss';

import SectionTitle from '../../components/section-title/section-title.component';
import PartsOverview from '../../components/parts-overview/parts-overview.component';
import SectionFilterOverview from '../../components/section-filter-overview/section-filter-overview.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import { firestore } from '../../firebase/firebase.utils';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = 
        {   
            allParts: [],
            indexParts: [],
            sectionParts: [],
            categorySubsections: [],
            renderedParts: [],
            searchQuery: '',
            sectionTitle: this.props.sectionTitle
        };

    }

    componentDidMount() {
        this.setStateProperties();
    }

    async setStateProperties() {
            const allParts = [];
            let { sectionParts, categorySubsections, renderedParts } = [];
            let currentSectionIndex = undefined;

        await firestore.collection('parts')
            .get()
            .then(querySnapshot => querySnapshot.forEach(doc => allParts.push(doc.data())));

        const indexParts = allParts.map(el => el.items).flat();
        currentSectionIndex = allParts.findIndex(el => el.title === this.state.sectionTitle);
        sectionParts = currentSectionIndex === -1 ? indexParts : allParts[currentSectionIndex].items;
        categorySubsections = sectionParts
            .filter(arr => arr.section === this.props.sectionTitle)
            .map(arr => arr.category)
            .reduce((unique, subsection) => unique.includes(subsection) ? unique : [...unique, subsection], []);
        renderedParts = this.props.sectionTitle === 'Index' ? indexParts : sectionParts;

        this.setState({ 
            allParts: allParts,
            indexParts: indexParts,
            sectionParts: sectionParts,
            categorySubsections: categorySubsections,
            renderedParts: renderedParts
        });
    }

    filterPartsBySubsection = (e) => {
        const categoryId = e.target.id;

        this.setState({ 
            renderedParts: 
                categoryId === 'Show All' ?
                    this.state.sectionParts :
                    this.state.sectionParts.filter(part => part.category === categoryId),
        });
    }

    onSearchBarInput = (e) => {
        e.target.value === '' ?
            this.setState({
                searchQuery: e.target.value,
                renderedParts: this.state.sectionParts
            })

            :

            this.setState({
                searchQuery: e.target.value,
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
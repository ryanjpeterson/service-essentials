import React from 'react';
import './part-listing.styles.scss';

import { storage } from '../../firebase/firebase.utils';

import DefaultImg from '../../img/part-default.png';

class PartListing extends React.Component {
    state = {
        imgUrl: ''
    };

    grabPartImages() {
        storage.ref(`parts/${this.props.imgId}.png`).getDownloadURL()
            .then(res => this.setState({ imgUrl: res }))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.grabPartImages();
    }

    render() {
        return(
            <div className='part-listing'>
                <div className='part-listing__img-container'>
                    <img className='part-listing__img' src={this.state.imgUrl !== '' ? this.state.imgUrl : DefaultImg} alt={this.props.partNumber} />
                </div>
                <h2 className='part-listing__number'>{this.props.partNumber}</h2>
                <span className='part-listing__description'>{this.props.description}</span>
            </div>    
        );
    }
}

export default PartListing;
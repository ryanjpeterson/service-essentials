import React from 'react';

import './search-bar.styles.scss';

const SearchBar = ({ onSearchBarInput }) => (
    <div className='search-bar'>
        <input 
            className='search-bar__input' 
            type="text" 
            placeholder='Stuck? Enter a part number or description...' 
            onChange={onSearchBarInput}    
        />
    </div>
);

export default SearchBar;
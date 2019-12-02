import React from 'react';

import './menu-collapse.styles.scss';

const MenuCollapse = ({ hidden, toggleHidden }) => (
    <button onClick={toggleHidden} className='menu-collapse'>
        {
            hidden === true ? 'Show Menu' : 'Hide Menu'
        }
    </button>
);

export default MenuCollapse;
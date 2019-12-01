import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../img/service-essentials-logo.svg';
import './header.styles.scss';

const Header = () => (
    <nav className='header'>
        <div className='header__logo--container'>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt='Service Essentials' />
            </Link>
        </div>

        <div className='header__links'>
            <Link to='/dishwasher'>Dishwasher</Link>
            <Link to='/range'>Range</Link>
            <Link to='/refrigerator'>Refrigerator</Link>
            <Link to='/dryer'>Dryer</Link>
            <Link to='/washer'>Washer</Link>
            <Link to='/miscellaneous'>Misc</Link>
        </div>
    </nav>
);

export default Header;
import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../img/service-essentials-logo.svg';
import './header.styles.scss';

import MenuCollapse from '../menu-collapse/menu-collapse.component';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: false
        }

        this.toggleHidden = this.toggleHidden.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            window.innerWidth > 999 ?
                this.setState({ hidden: false }) :
                this.setState({ hidden: this.state.hidden });
        });
    }

    toggleHidden = () => {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        return(
            <nav className='header'>
                <div className='header__logo--container'>
                    <Link to='/'>
                        <img className='header__logo' src={Logo} alt='Service Essentials' />
                    </Link>
                    <MenuCollapse hidden={this.state.hidden} toggleHidden={this.toggleHidden} />
                </div>

                {
                    this.state.hidden === false ?
                        <div className='header__links'>
                            <Link to='/dishwasher'>Dishwasher</Link>
                            <Link to='/range'>Range</Link>
                            <Link to='/refrigerator'>Refrigerator</Link>
                            <Link to='/dryer'>Dryer</Link>
                            <Link to='/washer'>Washer</Link>
                            <Link to='/miscellaneous'>Misc</Link>
                        </div> : ''
                }
            </nav>
        );        
    }
}

export default Header;
import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../img/service-essentials-logo.png';
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
                            <Link className='header__links--item' to='/dishwasher'>Dishwasher</Link>
                            <Link className='header__links--item' to='/range'>Range</Link>
                            <Link className='header__links--item' to='/refrigerator'>Refrigerator</Link>
                            <Link className='header__links--item' to='/dryer'>Dryer</Link>
                            <Link className='header__links--item' to='/washer'>Washer</Link>
                            <Link className='header__links--item' to='/miscellaneous'>Misc</Link>
                            <a className='github' href='https://github.com/ryanjpeterson/service-essentials'>
                                GitHub
                            </a>
                        </div> : ''
                }
            </nav>
        );        
    }
}

export default Header;
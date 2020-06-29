import React from 'react';

import './header.scss';
import { NavLink } from 'react-router-dom';
class Header extends React.Component {
    menuMobileRef = React.createRef();

    toggleMenu = () => {
        if(this.menuMobileRef.current.style.display === 'block') {
            this.menuMobileRef.current.style.display = 'none';
        } else {
            this.menuMobileRef.current.style.display = 'block';
        }
    }
    render() {
        return (
            <header>
                <div className="nav-bar">
                    <li className="link-d">
                        <NavLink to="/gallery" activeClassName="active-link" >Gallery</NavLink>
                    </li>
                    <li className="link-d">
                        <NavLink to="/create" activeClassName="active-link" >Create</NavLink>
                    </li>
                    <div className="mobile">
                        <img src={process.env.PUBLIC_URL + 'assets/images/menu.png'} alt="menu icon" onClick={() => this.toggleMenu()}/>
                        <div className="mobile-menu" ref={this.menuMobileRef}>
                            <li className="link-m" onClick={() => this.toggleMenu()}>
                                <NavLink to="/gallery" activeClassName="active-link" >Gallery</NavLink>
                            </li>
                            <li className="link-m" onClick={() => this.toggleMenu()}>
                                <NavLink to="/create" activeClassName="active-link" >Create</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="title-container">
                    <h1>Mementos</h1>
                </div>
            </header>
        );
    }
}

export default Header;
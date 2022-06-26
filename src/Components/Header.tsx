import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header' id='open'>
            <div className="header__container" id='close'>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/works" className="menu__link">Works</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/blog" className="menu__link">Blog</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/" className="menu__link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__button">
                    <a href='#open' className="icon-menu"><span/></a>
                    <a href='#close' className="close-icon-menu"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
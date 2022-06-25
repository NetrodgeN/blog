import React from 'react';

const Header = () => {
    return (
        <header className='header' id='open'>
            <div className="header__container" id='close'>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Works</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Blog</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Contact</a>
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
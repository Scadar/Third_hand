import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'

let Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__inner">
                    <div className="Header__logo"><p className="Header__logo-text">Third hand</p></div>
                    <form className="Header__search">
                        <p><input className="Header__search-text" type="search"/>
                            <img src='../../img/search.svg' alt="search" className="Header__search-icon"/>
                        </p>
                    </form>
                    <div className="Header__btn-group">
                        <Link to="#" className="Header__cart">
                            <img src="../../img/search.svg" alt="cart" className="Header__cart-icon"/>
                        </Link>
                        <Link to="#" className="Header__profile">
                            <img src="../../img/search.svg" alt="profile" className="Header__profile-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;

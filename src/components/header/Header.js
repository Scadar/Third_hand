import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'
import HeaderSearchicon from '../../img/search.svg'
import HeaderCartIcon from '../../img/cart.svg'
import HeaderProfileIcon from '../../img/user.svg'

import ProfileBtn from '../profileBtn/ProfileBtn'
import {Dropdown} from 'antd';



const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__inner">
                    <div className="Header__logo"><p className="Header__logo-text">Third hand</p></div>
                    <form className="Header__search">
                        <p><input className="Header__search-text" type="search"/>
                            <img src={HeaderSearchicon} alt="search" className="Header__search-icon"/>
                        </p>
                    </form>
                    <div className="Header__btn-group">
                        <Link to="#" className="Header__cart">
                            <img src={HeaderCartIcon} alt="cart" className="Header__cart-icon"/>
                        </Link>
                        <Link to="#" className="Header__profile">
                            <Dropdown  overlay={ProfileBtn} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img src={HeaderProfileIcon} alt="profile" className="Header__profile-icon"/>
                                </a>
                            </Dropdown>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;

import React from 'react';
import {Link} from "react-router-dom";
import './Footer.scss';
import vkImg from '../../img/vk.svg'
import telImg from '../../img/telegram.svg'


let FooterL = () => {
    return (
        <footer className="footer">

            <div className="container">
                <div className="footer__inner">
                    <div className="footer__help">
                        <div className="footer__help-title title">Помощь</div>
                        <ul className="footer__help-list">
                            <Link className="footer__help-item">• Как оформить заказ</Link><br/>
                            <Link className="footer__help-item">• Публичная оферта</Link><br/>
                            <Link className="footer__help-item">• Как это работает</Link>
                        </ul>
                    </div>
                    <div className="footer__connect">
                        <div className="footer__connect-title title">Связаться с нами</div>
                        <Link href="https://vk.com/romantlt" target="_blank" rel="noreferrer" className="footer__connect-link"><img
                            src={vkImg} alt="" className="footer__connect-img"/></Link>
                        <Link href="https://vk.com/acashi" rel="noreferrer" target="_blank" className="footer__connect-link"><img
                            src={telImg} alt="" className="footer__connect-img"/></Link>
                    </div>
                    <div className="footer__partners title">Партнеры</div>
                </div>
            </div>

        </footer>


    );
}
export default FooterL;

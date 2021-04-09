import React from 'react';
import cardImg from '../../img/card-photo.png'
import './CardPage.scss'

const CardPage = () => {
    return (
        <div className='CardPage-container'>
            <div className="CardPage-imgs">
                <div className="CardPage-imgs-col">
                    <div className='CardPage-imgs-col-item-conteiner'>
                        <img src={cardImg} alt="" className="CardPage-imgs-col-item"/>
                    </div>
                    <div className='CardPage-imgs-col-item-conteiner'>
                        <img src={cardImg} alt="" className="CardPage-imgs-col-item"/>
                    </div>
                    <div className='CardPage-imgs-col-item-conteiner'>
                        <img src={cardImg} alt="" className="CardPage-imgs-col-item"/>
                    </div>
                </div>
                <div className="CardPage-img-active-container">
                        <img src={cardImg} className='CardPage-img-active' alt=""/>
                </div>
            </div>
            <div className="CardPage-description">
                <div className="CardPage-description-title">Прозрачная гейская блузка в цветочек</div>
                <div className="CardPage-description-price">699.99 ₽</div>
                <ul className="CardPage-description-list">
                    <li className="CardPage-description-list-items">
                        <div className="CardPage-description-list-item">Качество</div>
                        <div className="CardPage-description-list-item-value">12</div>
                    </li>
                    <li className="CardPage-description-list-items">
                        <div className="CardPage-description-list-item">Пол</div>
                        <div className="CardPage-description-list-item-value">12</div>
                    </li>
                    <li className="CardPage-description-list-items">
                        <div className="CardPage-description-list-item">Категория</div>
                        <div className="CardPage-description-list-item-value">12</div>
                    </li>
                    <li className="CardPage-description-list-items">
                        <div className="CardPage-description-list-item">Примечание</div>
                        <div className="CardPage-description-list-item-value">Сперма на воротникеСперма на воротникеСперма на воротникеСперма на воротнике</div>
                    </li>
                    <li className="CardPage-description-list-items">
                        <div className="CardPage-description-list-item">Размер</div>
                        <div className="CardPage-description-list-item-value">12</div>
                    </li>
                </ul>
                <button className="CardPage-description-btn">Забронировать</button>
            </div>
        </div>
    )
}
export default CardPage;
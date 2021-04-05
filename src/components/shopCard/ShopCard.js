import React from 'react';
import {Link} from "react-router-dom";
import cardImg from '../../img/card-photo.png'
import cardCart from '../../img/card-cart.svg'
import './ShopCard.scss'

import {Carousel} from 'antd';


let ShopCard = () => {
    return (

        <div className="shop__cards">
            <div className="shop__card">
                <div className="shop__card-scroll">

                    <Carousel autoplay>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                    </Carousel>

                    <div className="shop__card-inner">
                        <Link className="card-link">
                            <div className="shop__card-title">Блузка Костяна</div>
                            <div className="shop__card-text">Красивая блузка с пятном спермы</div>
                            <div className="shop__card-price">699.99 ₽</div>
                        </Link>
                        <button className="shop__btn">
                            <img src={cardCart} className="shop__btn-img" alt={''}/>
                        </button>
                    </div>

                </div>
            </div>
            <div className="shop__card">
                <div className="shop__card-scroll">

                    <Carousel autoplay>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                    </Carousel>

                    <div className="shop__card-inner">
                        <Link className="card-link">
                            <div className="shop__card-title">Блузка Костяна</div>
                            <div className="shop__card-text">Красивая блузка с пятном спермы</div>
                            <div className="shop__card-price">699.99 ₽</div>
                        </Link>
                        <button className="shop__btn">
                            <img src={cardCart} className="shop__btn-img" alt={''}/>
                        </button>
                    </div>

                </div>
            </div>
            <div className="shop__card">
                <div className="shop__card-scroll">

                    <Carousel autoplay>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                        <div>
                            <img src={cardImg} alt=""/>
                        </div>
                    </Carousel>

                    <div className="shop__card-inner">
                        <Link className="card-link">
                            <div className="shop__card-title">Блузка Костяна</div>
                            <div className="shop__card-text">Красивая блузка с пятном спермы</div>
                            <div className="shop__card-price">699.99 ₽</div>
                        </Link>
                        <button className="shop__btn">
                            <img src={cardCart} className="shop__btn-img" alt={''}/>
                        </button>
                    </div>

                </div>
            </div>

        </div>


    );
}
export default ShopCard;

import React from 'react';
import {Link} from "react-router-dom";
import cardImg from '../../img/card-img.png'
import cardCart from '../../img/card-cart.svg'
import './ShopCard.scss'

let ShopCard = () => {
    return (
            <div className="shop__cards">
                <div className="shop__card">
                    <div className="shop__card-scroll">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="shop__card-img carousel-item active">
                                    <img src={cardImg} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="shop__card-img carousel-item">
                                    <img src={cardImg} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="shop__card-img carousel-item">
                                    <img src={cardImg} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className=" shop__card-img carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="shop__card-img carousel-control-prev-icon" aria-hidden="true"/>
                                <span className="shop__card-img visually-hidden">Previous</span>
                            </button>
                            <button className="shop__card-img carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleControls" data-bs-slide="next"/>
                            <span className="shop__card-img carousel-control-next-icon" aria-hidden="true"/>
                            <span className="shop__card-img visually-hidden">Next</span>
                        </div>
                    </div>
                    <div className="shop__card-inner">
                        <Link href='#' className="shop__card-title">Блузка Костяна</Link>
                        <Link href='#' className="shop__card-text">Красивая блузка с пятном спермы</Link>
                        <Link href='#' className="shop__card-price">699.99 ₽</Link>

                        <button className="shop__btn">
                            <img src={cardCart} className="shop__btn-img" alt={''}/>
                        </button>
                    </div>
                </div>
            </div>
    );
}
export default ShopCard;

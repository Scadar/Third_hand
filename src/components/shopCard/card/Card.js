import React, {useRef} from 'react';
import {Button, Carousel} from "antd";
import {Link} from "react-router-dom";
import cardCart from "../../../img/card-cart.svg";

const Card = ({cardImg, title, text, price}) => {

    const carouselRef = useRef(null)

    const onNext = () => {
        carouselRef.current.next()
    }
    const onPrev = () => {
        carouselRef.current.prev()
    }

    return (
        <div className="shop__card">
            <div className="shop__card-scroll">
                <Carousel ref={carouselRef} autoplay >
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
                <Button onClick={onPrev}>Prev</Button>
                <Button onClick={onNext}>Next</Button>
                <div className="shop__card-inner">
                    <Link className="card-link" to={''}>
                        <div className="shop__card-title">{title}</div>
                        <div className="shop__card-text">{text}</div>
                        <div className="shop__card-price">{price} ₽</div>
                    </Link>
                    <button className="shop__btn">
                        <img src={cardCart} className="shop__btn-img" alt={''}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

import React, {useEffect, useState} from 'react';
import cardImg from '../../img/card-photo.png'
import './ShopCard.scss'
import Card from "./card/Card";


let ShopCard = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(r => r.json())
            .then(r => {
                setCards(r.results)
            })
    }, [])


    return (
        <div className="shop__cards">
            {
                cards.map((card, index) => {
                    return (
                        <Card key={index} title={card.name} cardImg={cardImg} price={card.mass} text={card.hair_color} />
                    )
                })
            }
        </div>
    );
}
export default ShopCard;

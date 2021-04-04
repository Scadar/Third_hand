import React from 'react';
import {Link} from "react-router-dom";
import './ShopFilter.scss'

let ShopFilters = () => {
    return (

        <div className="shop__filters">
            <div className="shop__filters-text">
                Фильтры :
            </div>
            <div className="shop__filters-price">
                <div className="dropdown">
                    <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Цена
                    </button>
                    <ul className="range dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <label htmlFor="customRange2" className="form-label">Выбранный ценовой диапазон</label>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                    </ul>
                </div>
            </div>
            <div className="shop__filters-quality">
                <div className="dropdown">
                    <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Качество
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <label htmlFor="customRange2" className="form-label">Выбранный ценовой диапазон</label>
                        <input type="range" className="form-range" min="0" max="5" id="customRange2"/>
                    </ul>
                </div>
            </div>
            <div className="shop__filters-category">
                <div className="dropdown">
                    <button className="btn-filter btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Категория
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                </div>
            </div>
            <div className="shop__filters-size">
                <div className="dropdown">
                    <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Размер
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                </div>
            </div>
            <div className="shop__filters-sex">
                <div className="dropdown">
                    <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Пол
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ShopFilters;


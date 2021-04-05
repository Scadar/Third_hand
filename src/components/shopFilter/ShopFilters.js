import React from 'react';
import {Link} from "react-router-dom";
import './ShopFilter.scss'
import PriceDropdown from './PriceDropdown'
import {Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";
import QualityDropdown from './QualityDropdown'


let ShopFilters = () => {
    return (

        <div className="shop__filters">
            <div className="shop__filters-text">
                Фильтры :
            </div>
            <div className="shop__filters-price">
                <div className="dropdown">
                <Dropdown overlay={PriceDropdown} trigger={['click']} >
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Цена <DownOutlined/>
                    </a>
                </Dropdown>
                </div>
            </div>

    <div className="shop__filters-quality">
        <div className="dropdown">
            <Dropdown overlay={QualityDropdown} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Качество <DownOutlined/>
                </a>
            </Dropdown>
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


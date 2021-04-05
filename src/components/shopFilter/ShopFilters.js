import React from 'react';
import './ShopFilter.scss'
import PriceDropdown from './Dropdowns/PriceDropdown'
import {Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";
import QualityDropdown from './Dropdowns/QualityDropdown'
import CategoryDropdown from './Dropdowns/CategoryDropdown'
import SizeDropdown from './Dropdowns/SizeDropdown'
import SexDropdown from './Dropdowns/SexDropdown'


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
            <Dropdown overlay={CategoryDropdown} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Категория <DownOutlined/>
                </a>
            </Dropdown>
        </div>
    </div>
    <div className="shop__filters-size">
        <div className="dropdown">
            <Dropdown overlay={SizeDropdown} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Размер <DownOutlined/>
                </a>
            </Dropdown>
        </div>
    </div>
    <div className="shop__filters-sex">
        <div className="dropdown">
            <Dropdown overlay={SexDropdown} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Пол <DownOutlined/>
                </a>
            </Dropdown>
        </div>
    </div>
</div>
);
}
export default ShopFilters;


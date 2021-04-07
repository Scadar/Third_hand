import React from 'react';
import './ShopFilter.scss'
import DropdownFilter from './Dropdowns/Dropdown'
import {Dropdown} from "antd";
import {DownOutlined} from "@ant-design/icons";

import CategoryDropdown from './Dropdowns/CategoryDropdown'
import SizeDropdown from './Dropdowns/SizeDropdown'
import SexDropdown from './Dropdowns/SexDropdown'

let ShopFilters = () => {
    return (
        <div className="shop__filters">
            <div className="shop__filters-text">
                Фильтры :
            </div>
            <DropdownFilter title="Цена" text='Выбрать ценовой диапазон:' maxValue='5000' step='100' type='slider'/>
            <DropdownFilter title="Качество" text='Выбрать диапазон качества:' maxValue='10' step='1' type='slider'/>


            <div className="shop__filters-category">
                <div className="dropdown">
                    <Dropdown overlay={CategoryDropdown} trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Категория <DownOutlined/>
                </span>
                    </Dropdown>
                </div>
            </div>
            <div className="shop__filters-size">
                <div className="dropdown">
                    <Dropdown overlay={SizeDropdown} trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Размер <DownOutlined/>
                </span>
                    </Dropdown>
                </div>
            </div>
            <div className="shop__filters-sex">
                <div className="dropdown">
                    <Dropdown overlay={SexDropdown} trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Пол <DownOutlined/>
                </span>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}
export default ShopFilters;


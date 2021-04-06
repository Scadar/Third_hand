import React from 'react';
import './ShopFilter.scss'
import PriceDropdown from './Dropdowns/PriceDropdown'
import {Dropdown, Popover} from "antd";
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
                    <Popover placement="bottom" title={null} content={PriceDropdown} trigger="click" style={{height: 100}}>
                        <span className="ant-dropdown-link">
                            Цена <DownOutlined/>
                        </span>
                    </Popover>
                </div>
            </div>

            <div className="shop__filters-quality">
                <div className="dropdown">
                    <Dropdown overlay={QualityDropdown} trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Качество <DownOutlined/>
                </span>
                    </Dropdown>
                </div>
            </div>
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


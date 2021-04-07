import React from 'react';
import {Button, Divider, Popover} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import './Dropdown.scss';
import {DropdownSlider} from "./DropdownSlider/DropdownSlider";

const DropdownFilter = ({title, text, maxValue, step, type}) => {

    const getComponentByType = (type) => {
        switch (type){
            case 'slider':
                return <DropdownSlider step={step} maxValue={maxValue} />
            case 'checkbox':
                return null
            default:
                return null
        }
    }

    const popoverContent = (
        <div>
            <div>
                <div className="filter-price-container">
                    <div className='filter-price-text'>{text}</div>
                    <Button className='btn-price'>Сбросить</Button>
                </div>
                <Divider/>
            </div>
            {getComponentByType(type)}
        </div>
    )
    return (
        <div>
            <div className="dropdown">
                <Popover placement="bottom" title={null} content={popoverContent} trigger="click">
                        <span className="ant-dropdown-link">
                            {title} <DownOutlined/>
                        </span>
                </Popover>
            </div>
        </div>
    )
};


export default DropdownFilter;

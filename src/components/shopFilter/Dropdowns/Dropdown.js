import React from 'react';

import {Slider, Button, Divider, Popover} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import './Dropdown.scss';


function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}

const dropdownContent = ({text}) => {
    return (
        <div>
            <div className="filter-price-container">
                <div className='filter-price-text'>{text}</div>
                <Button className='btn-price'>Сбросить</Button>
            </div>
            <Divider/>
        </div>
    )
};
const dropdownSlider = ({step, maxValue}) => {
    return (
        <div>
            <div className="dropdown-in">
                <input className='filter-dropdown-in' type="text" placeholder='от'/>
                <input className='filter-dropdown-in' type="text" placeholder='до'/>
            </div>
            <Slider
                range
                step={step}
                max={maxValue}
                defaultValue={[0, {maxValue}]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </div>
    )
};

const Dropdown = ({title, text, maxValue, step, type}) => {
    const content = (<div>
            {dropdownContent}
            {type === 'slider' ? dropdownSlider : null}
        </div>
    )
    return (
        <div>
            <div className="dropdown">
                <Popover placement="bottom" title={null} content={content} trigger="click">
                        <span className="ant-dropdown-link">
                            {title} <DownOutlined/>
                        </span>
                </Popover>
            </div>
        </div>)
};


export default Dropdown;

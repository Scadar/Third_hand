import React from 'react';

import {Button, Menu, Slider} from 'antd';
function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}


let QualityDropdown = (
    <Menu>

        <Menu.Item key="0">
            <div className="filter-price-container">
                <div className='filter-price-text'>Выбрать диапазон качества:</div>
                <Button className = 'btn-price'>Сбросить</Button>
            </div>
            <div className="line"></div>
            <Slider
                range
                step={1}
                max={10}
                autoFocus={true}
                defaultValue={[0, 80]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </Menu.Item>



    </Menu>
);



export default QualityDropdown;
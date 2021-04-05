import React from 'react';

import {Menu, Slider,Button} from 'antd';


function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}


let PriceDropdown = (
    <Menu>

        <Menu.Item key="0">
            <div className="filter-price-container">
                <div className='filter-price-text'>Выбрать ценовой диапазон:</div>
                <Button className = 'btn-price'>Сбросить</Button>
            </div>
            <Slider
                range

                step={100}
                max={5000}
                defaultValue={[0, 5000]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </Menu.Item>


    </Menu>
);


export default PriceDropdown;
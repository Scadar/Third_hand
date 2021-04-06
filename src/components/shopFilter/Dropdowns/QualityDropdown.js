import React from 'react';

import {Button, Slider} from 'antd';

function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}


let QualityDropdown = (
    <>
        <div className="filter-price-container">
            <div className='filter-price-text'>Выбрать диапазон качества:</div>
            <Button className='btn-price'>Сбросить</Button>
        </div>
        <div className="line" />
        <Slider
            range
            step={1}
            max={10}
            autoFocus={true}
            defaultValue={[0, 80]}
            onChange={onChange}
            onAfterChange={onAfterChange}
        />
    </>

);


export default QualityDropdown;

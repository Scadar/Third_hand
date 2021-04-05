import React from 'react';

import {Menu, Slider} from 'antd';
function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}


let PriceDropdown = (
    <Menu>

        <Menu.Item key="0">
            <Slider
                range

                step={100}
                max={5000}
                defaultValue={[0, 80]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </Menu.Item>



    </Menu>
);



export default PriceDropdown;
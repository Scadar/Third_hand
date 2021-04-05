import React from 'react';

import {Menu, Slider} from 'antd';
function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}


let QualityDropdown = (
    <Menu>

        <Menu.Item key="0">
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
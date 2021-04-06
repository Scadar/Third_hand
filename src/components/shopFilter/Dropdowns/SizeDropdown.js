import React from 'react';


import {Menu, Checkbox, Col } from 'antd';


function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}



let SizeDropdown = (
    <Menu className='sizeDropdown-menu'>

        <Menu.Item key="0">


            <Col span={1}>

                <Checkbox onChange={onChange}>XXS</Checkbox>
            </Col>
            <Col span={2}>
                <Checkbox onChange={onChange}>XS</Checkbox>
            </Col>
            <Col span={3}>
                <Checkbox onChange={onChange}>S</Checkbox>
            </Col>
            <Col span={4}>
                <Checkbox onChange={onChange}>M</Checkbox>
            </Col>
            <Col span={5}>
                <Checkbox onChange={onChange}>L</Checkbox>
            </Col>
            <Col span={6}>
                <Checkbox onChange={onChange}>XL</Checkbox>
            </Col>








        </Menu.Item>



    </Menu>
);



export default SizeDropdown;
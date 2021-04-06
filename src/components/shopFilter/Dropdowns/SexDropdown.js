import React from 'react';


import {Menu, Checkbox, Col } from 'antd';


function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}



let SexDropdown = (
    <Menu className='sexDropdown-menu'>

        <Menu.Item className='sexDropdown-items' key="0">


            <Col span={1}>

                <Checkbox className='sexDropdown-item'  onChange={onChange}>Мужское</Checkbox>
            </Col>
            <Col span={2}>
                <Checkbox onChange={onChange}>Женское</Checkbox>
            </Col>









        </Menu.Item>



    </Menu>
);



export default SexDropdown;
import React from 'react';


import {Menu, Checkbox, Col } from 'antd';


function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}



let CategoryDropdown = (
    <Menu>

        <Menu.Item key="0">


                <Col span={1}>
                    <Checkbox onChange={onChange}>Головные уборы</Checkbox>
                </Col>
                <Col span={2}>
                    <Checkbox onChange={onChange}>Верхняя одежда</Checkbox>
                </Col>
                <Col span={3}>
                    <Checkbox onChange={onChange}>Свитера, джемперы</Checkbox>
                </Col>
                <Col span={4}>
                    <Checkbox onChange={onChange}>Футболки, Майки</Checkbox>
                </Col>
                <Col span={5}>
                    <Checkbox onChange={onChange}>Брюки, штаны, чиносы</Checkbox>
                </Col>
                <Col span={6}>
                    <Checkbox onChange={onChange}>Обувь</Checkbox>
                </Col>








        </Menu.Item>



    </Menu>
);



export default CategoryDropdown;
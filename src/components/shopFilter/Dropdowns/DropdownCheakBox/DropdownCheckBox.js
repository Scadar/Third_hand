import React from 'react'
import {Checkbox, Col } from 'antd';
import './DropdownCheckBox.scss'

export const DropdownCheckBox = ({maxValue}) => {
    const checkBoxes = ["Головные уборы", "Верхняя одежда","Верхняя одежда"]
    return (
        <div>
            {
                checkBoxes.map((value, index) => {
                    return (
                        <Col  span={index+1}>
                            <Checkbox className='checkBox-text'>{value}</Checkbox>
                        </Col>
                    )
                })
            }
        </div>
    )
};

import React from 'react'
import {Slider} from "antd";

export const DropdownSlider = ({step, maxValue}) => {
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
            />
        </div>
    )
};

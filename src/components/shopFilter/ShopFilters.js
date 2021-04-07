import React from 'react';
import './ShopFilter.scss'
import DropdownFilter from './Dropdowns/DropdownFilter'




let ShopFilters = () => {
    return (
        <div className="shop__filters">
            <div className="shop__filters-text">
                Фильтры :
            </div>
            <DropdownFilter title="Цена" text='Выбрать ценовой диапазон:' maxValue='5000' step='100' type='slider'/>
            <DropdownFilter title="Качество" text='Выбрать диапазон качества:' maxValue='10' step='1' type='slider'/>
            <DropdownFilter title="Категория" text='Выбрать категорию:' type='checkbox'/>
            <DropdownFilter title="Размер" text='Выбрать категорию:' type='checkbox'/>
            <DropdownFilter title="Пол" text='Выбрать категорию:' type='checkbox'/>



        </div>
    );
}
export default ShopFilters;


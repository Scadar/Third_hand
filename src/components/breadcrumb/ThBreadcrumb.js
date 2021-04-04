import React from 'react';
import {Link} from "react-router-dom";
import './ThBreadcrumb.scss'
import { Breadcrumb } from 'antd';

let ThBreadcrumb = () => {
    return (
        <div className='Breadcrumb'>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="">Application Center</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="">Application List</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}
export default ThBreadcrumb;

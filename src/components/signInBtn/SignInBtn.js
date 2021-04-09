import React from 'react';
import './SignInBtn.scss'
import {Menu,} from 'antd';
import {DownOutlined} from "@ant-design/icons";


const SignInBtn = () => {
    return (
        <div className='SignInBtn'>
            <DownOutlined className='DownOutlined__profile'/>
            <Menu>
                <Menu.Item key="0">
                        <a className='SignInBtn-link'>Войти</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default SignInBtn;
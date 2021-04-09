import React from 'react';
import './ProfileBtn.scss'
import {Menu} from 'antd';
import {DownOutlined} from "@ant-design/icons";


const ProfileBtn = () => {
    return (
        <div className='SignInBtn'>
            <DownOutlined className='DownOutlined__profile'/>
            <Menu>
                <Menu.Item key="0">
                    <a className='SignInBtn-link'>Профиль</a>
                </Menu.Item>
                <Menu.Item key="0">
                    <a className='SignInBtn-link'>Покупки</a>
                </Menu.Item>
                <Menu.Item key="0">
                    <a className='SignInBtn-link'>Настройки</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="0">
                    <a className='SignInBtn-link'>Выйти</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default ProfileBtn;
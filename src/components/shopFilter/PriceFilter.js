import React from 'react';
import {Link} from "react-router-dom";
import './ShopFilter.scss'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const PriceFilter = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me <DownOutlined />
    </a>
  </Dropdown>,
  mountNode,
);
export default PriceFilter;
'use client';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const FilterDropdown = ({title, items }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className='w-40 h-10 rounded-lg bg-white border border-[#B1B4BB] p-2 justify-center text-base font-normal cursor-pointer'>
        {title}
        <DownOutlined  />
      </Space>
    </a>
  </Dropdown>
);
export default FilterDropdown;
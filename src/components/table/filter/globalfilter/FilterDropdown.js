"use client";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const FilterDropdown = ({ title, items }) => {
  const [selectedValue, setSelectedValue] = useState(title);

  const onClick = ({ key }) => {
    let selected = items.find((value) => value.key === key).label;
    setSelectedValue(selected);
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="w-40 h-10 rounded-lg bg-white border border-[#B1B4BB] p-2 justify-center text-base font-normal cursor-pointer">
          {selectedValue}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default FilterDropdown;

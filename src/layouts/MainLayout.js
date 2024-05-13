import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
function MainLayout({ children }) {
  return (
    <AntdRegistry>
      <div className="w-[1170px] m-auto">{children}</div>
    </AntdRegistry>
  );
}

export default MainLayout;

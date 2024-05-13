import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {

 

};
const FileUploader = () => (
  <Upload {...props}>
    <Button className='!bg-[#EBEEF3] !border border-[#D7D8DA] w-16 h-[37px] !text-center inline-block !rounded-lg p-[5px] !font-semibold !text-sm '>선택</Button>
  </Upload>
);
export default FileUploader;
'use client';
import React, { useState } from 'react';
import { Button, Modal, Dropdown, Space } from 'antd';
import { DownOutlined, ExclamationOutlined } from '@ant-design/icons';
import FileUploader from './FileUploader';

const items = [
  { label: '일반개인', key: '1' },
  { label: '소득적격', key: '2' },
  { label: '개인전문', key: '3' },
  { label: '법인', key: '4' },
  { label: '여신금융', key: '5' },
  { label: 'P2P온투', key: '6' },
];

const InvestmentModal = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const SeConfirm = () => {
    Modal.confirm({
      icon: <ExclamationOutlined />,
      content: '투자유형을 변경하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
    });
  };

  const handleOk = () => {
    setModal2Open(false);
    SeConfirm();
  };

  const handleCancel = () => {
    setModal2Open(false);
  };

  const customFooter = (
    <div>
      <Button key="back" onClick={handleCancel} className='!w-[160px] !h-[44px] !bg-[#2A3958] p-6 !text-white !border-0 mr-[12px] !text-sm !font-bold'>
        저장
      </Button>
      <Button key="submit" onClick={handleOk}  className='!w-[160px] !h-[44px] !border-2 !border-[#2A3958] !text-[#2A3958] !text-sm !font-bold'>
        취소
      </Button>
    </div>
  );

  return (
    <>
      <Button onClick={() => setModal2Open(true)} className=' inline-block text-center !h-12  !p-3 rounded-lg !text-white text-base font-semibold !bg-[#2A3958] '>
        투자유형 변경 Change investment type
      </Button>

      <Modal
        title="투자유형 변경"
        centered
        className='!w-[800px]'
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={customFooter}
      >
        <div className='border border-[#D7D8DA]'>
          <div className='flex'>
            <div className='bg-[#EEF0F4] w-[26%] h-[52px] p-3.5 border-b border-[#fff]'><h4 className='font-semibold text-sm'>회원번호</h4></div>
            <div className='w-[74%] h-[52px]   py-3.5 px-5 border-b border-[#D7D8DA]'><h4 className='font-semibold '>abc111</h4></div>
          </div>
          <div className='flex'>
            <div className='bg-[#EEF0F4] w-[26%] h-[52px] p-3.5 border-b border-[#fff]'><h4 className='font-semibold text-sm'>회원명/법인명</h4></div>
            <div className='w-[74%] h-[52px] py-3.5 px-5 border-b border-[#D7D8DA]'><h4 className='font-semibold '>김길동</h4></div>
          </div>
          <div className='flex'>
            <div className='bg-[#EEF0F4] w-[26%] h-[52px] p-3.5 border-b border-[#fff]'><h4 className='font-semibold text-sm'>예치금잔액 <span className='w-1 h-1 rounded-full bg-[#FF4D4F] inline-block relative top-[-9px]'></span></h4></div>
            <div className='w-[74%] h-[52px] p-1.5 px-2 border-b border-[#D7D8DA]'>
              <Dropdown 
                menu={{ items }}
                trigger={['click']}
                overlayClassName="mdl-dropdown"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='w-72 h-10 rounded-lg bg-white border border-[#B1B4BB] py-2 px-4 justify-between text-base font-normal cursor-pointer border-[#B1B4BB] font-medium text-sm'>
                    일반개인
                    <DownOutlined  />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className='flex'>
            <div className='bg-[#EEF0F4] w-[26%] h-[52px] p-3.5'><h4 className='font-semibold text-sm'>투자건수 <span className='w-1 h-1 rounded-full bg-[#FF4D4F] inline-block relative top-[-9px]'></span></h4></div>
            <div className='w-[74%] h-[52px] p-2 px-2'>
              <FileUploader/>
            </div>
          </div>
        </div>
        <ul class="list-disc p-[18px]">
          <li className='font-medium text-sm mb-1'>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
          <li className='font-medium text-sm'>최대 10개, 100MB까지 등록이 가능합니다.</li>
        </ul>
      </Modal>
    </>
  );
};

export default InvestmentModal;

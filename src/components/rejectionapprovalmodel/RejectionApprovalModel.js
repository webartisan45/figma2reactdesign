'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationOutlined } from '@ant-design/icons';

const items = [
  { label: '일반개인', key: '1' },
  { label: '소득적격', key: '2' },
  { label: '개인전문', key: '3' },
  { label: '법인', key: '4' },
  { label: '여신금융', key: '5' },
  { label: 'P2P온투', key: '6' },
];

const RejectionApprovalModel = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const SeConfirm = () => {
    modal.confirm({
      icon: <ExclamationOutlined />,
      content: '필수입력항목을 입력해주세요.',
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

  const [modal, contextHolder] = Modal.useModal();

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
        title="승인 거부 사유 등록"
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
            <div className='bg-[#EEF0F4] w-[26%]  p-3.5 items-center flex'><h4 className='font-semibold text-sm'>투자건수 <span className='w-1 h-1 rounded-full bg-[#FF4D4F] inline-block relative top-[-9px]'></span></h4></div>
            <div className='w-[74%]  p-2 px-2'>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>서류 식별 불가</span>
              </label>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>필수 서류 누락</span>
              </label>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>서류의 내용이 등록된 회원정보와 다름</span>
              </label>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</span>
              </label>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>서류의 유효기간이 초과됨</span>
              </label>
              <label className='flex mb-3'>
                <input type="checkbox" className='h-[20px] w-[16px] mr-[8px]'/> 
                <span className='font-semibold text-sm'>직접 입력</span>
              </label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-[#DDE0E5] !border !border-[#B1B4BB] !h-[100px] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="사유 입력"></textarea>
            </div>
          </div>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
};

export default RejectionApprovalModel;

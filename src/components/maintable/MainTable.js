'use client';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Name2',
    dataIndex: 'name2',
  },
];

const data = [
  {
    no: '1',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',


  },
  {
    no: '2',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'approvaldenied', message: '승인거부' },
    rejectionofapproval: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '3',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'approved', message: '승인완료s' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '4',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '5',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'approvaldenied', message: '승인거부' },
    rejectionofapproval: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '6',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '7',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'approved', message: '승인완료s' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '8',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '9',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'approvaldenied', message: '승인거부' },
    rejectionofapproval: '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '10',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
  {
    no: '11',
    existingtype: '소득적격',
    applicationtype: '개인전문',
    documentssubmitted: '보기',
    applicationdatetime: '2023-01-10 09:00:00',
    approval: { status: 'waiting', message: '승인대기' },
    rejectionofapproval: '',
    approvaldatetime: '2023-01-10 09:00:00',
    manager: '김관리자',
  },
];
const MainTable = () => {
  const rowClassName = (record, index) => {
    if (index % 3 === 0) {
      return 'white-row';
    } else {
      return 'gray-row';
    }
  };
  const [size, setSize] = useState('large');
  const [showHeader, setShowHeader] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    size,
    showHeader,
    rowSelection,
    scroll,
  };
  return (
    <>
      <div className="custom-scrollbar">
        <Table
          bordered={false}
          loading={false}
          title={false}
          header={true}
          footer={false}
          expandable={false}
          ellipsis={false}
          {...tableProps}
          pagination={{
            position: ['none', 'bottomCenter'],
          }}
          dataSource={hasData ? data : []}
          scroll={scroll}
          rowClassName={rowClassName}
        >
          <Table.Column title="No" dataIndex="no" key="no" className='font-semibold text-sm w-[55px]' />
          <Table.Column title="기존유형" dataIndex="existingtype" key="existingtype" className='font-semibold text-sm w-[100px]' />
          <Table.Column title="신청유형" dataIndex="existingtype" key="applicationtype" className='font-semibold text-sm w-[100px]' />

          <Table.Column title="제출서류" dataIndex="documentssubmitted" key="documentssubmitted" className='w-[100px]' render={(documentssubmitted) => (
            <>
              {documentssubmitted == '보기' && <span className='bg-[#EBEEF3] border border-[#D7D8DA] w-16	h-8 text-center inline-block rounded-lg p-[5px]	font-semibold text-sm'>{documentssubmitted}</span >}
            </>
          )}
          />
          <Table.Column title="신청일시" dataIndex="applicationdatetime" key="applicationdatetime" className='font-semibold text-sm w-[190px]' />
          <Table.Column title="승인여부" dataIndex="approval" key="approval" className='w-[90px]' render={(approval) => (
            <>
              {approval.status == 'waiting' && <span className='bg-[#FFEDD5] text-[#9A3412] w-20 inline-block text-center p-[5px] rounded-full font-semibold text-sm'>{approval.message}</span>}
              {approval.status == 'approvaldenied' && <span className='bg-[#FEE2E2] text-[#991B1B] w-20	inline-block text-center p-[5px] rounded-full font-semibold text-sm'>{approval.message}</span>}
              {approval.status == 'approved' && <span className='bg-[#DCFCE7] text-[#166534] w-20 inline-block text-center p-[5px] rounded-full font-semibold text-sm'>{approval.message}</span>}
            </>
          )}
          />
          <Table.Column title="승인거부 사유" dataIndex="rejectionofapproval" key="rejectionofapproval" className='font-semibold text-sm w-[375px]' />
          <Table.Column title="승인일시 " dataIndex="approvaldatetime" key="approvaldatetime" className='font-semibold text-sm w-[190px]' />
          <Table.Column title="관리자  " dataIndex="manager" key="manager" className='font-semibold text-sm w-[125px]' />
        </Table>
      </div>
    </>
  );
};
export default MainTable;
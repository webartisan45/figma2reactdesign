import React from 'react'
import FilterDropdown from './FilterDropdown'

function GlobalFilter() {
  const Approvalall
  = [
    {
      label: '승인여부 전체',
      key: 'Approval All',
    },
    {
      label: '승인대기',
      key: 'Waiting for approval',
    },
    {
      label: '승인완료',
      key: 'Approved',
    },
    {
      label: '승인거부',
      key: 'Approval denied',
    },
  ];


  const Applicationdatetime
  = [
    {
      label: '신청일시순',
      key: 'In order of application date and time',
    },
    {
      label: '승인일시순',
      key: 'Approval date and time',
    },
 
  ];



  const Approvalstatus = [
    {
      label: '승인완료',
      key: 'Approved',
    },
    {
      label: '승인거부',
      key: 'Approval denied',
    },

  ];
  return (
    <div>
        <div className='flex justify-between border-b pb-3 border-[#D7D8DA] mb-2'>
            <div className='flex items-center gap-4'>
                <h3 className='font-semibold text-lg'>신청 목록</h3>
                <p className='font-medium text-sm text-[#5A616A]'>(총 100명 | 승인대기 <span className='text-red-600'>1</span>건)</p>
            </div>
            <div className='flex gap-1'>
                <FilterDropdown title={'승인여부 전체'} items={Approvalall} />
                <FilterDropdown title={'신청일시순'}  items={Applicationdatetime} />
                <FilterDropdown  title={'승인상태 변경'} items={Approvalstatus} />
            </div>
        </div>
    </div>
  )
}

export default GlobalFilter

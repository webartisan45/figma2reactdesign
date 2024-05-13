
import React from 'react'
import RegisterButton from './RegisterButton'
import FilterDropdown from '../globalfilter/FilterDropdown'

function TableFilter() {

  const items= [
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


  return (
    <div>
    <div className='flex justify-between pb-4  mb-4'>
         <RegisterButton Regbtn={'등록'}  />
         <div className='flex items-center gap-1'>
         <p className='font-medium text-sm text-[#5A616A] me-4'>선택한 0건</p>
         <FilterDropdown title={'승인여부 전체'} items={items} />
         <RegisterButton Regbtn={'저장'} />
        </div>
    </div>
</div>
  )
}

export default TableFilter

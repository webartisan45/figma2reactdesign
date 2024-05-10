'use client';
import ChangeInvestmentModal from '@/modal/ChangeInvestmentModal';
import { Tabs } from 'antd';
import React from 'react';

function TabHead() {
    const items = [
        {
          key: 'Basic information management',
          label: '기본정보 관리',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'Investment type management',
          label: '투자유형 관리',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'Check deposit/withdrawal details',
          label: '입출금내역 조회',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'Sales history inquiry',
          label: '영업내역 조회',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'Investment details inquiry',
          label: '투자내역 조회',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'View bond details',
          label: '채권내역 조회',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'SMS Management',
          label: 'SMS 관리',
          children: <ChangeInvestmentModal/>
        },
        {
          key: 'Consultation history management',
          label: '상담내역 관리 ',
          children: <ChangeInvestmentModal/>
        },
        {
          key: '1:1 inquiry history inquiry',
          label: '1:1문의내역 조회 ',
          children: <ChangeInvestmentModal/>
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div>
            <Tabs defaultActiveKey="1" items={items}  onChange={onChange} />
        </div>
    );
}

export default TabHead;

import Top from '@/components/pagetop/Top'
import TabHead from '@/components/tab/TabHead'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

function page() {
  return (
    <div>
      <MainLayout>
        <Top/>
        <TabHead/>
    
      </MainLayout>
      
    </div>
  )
}

export default page 
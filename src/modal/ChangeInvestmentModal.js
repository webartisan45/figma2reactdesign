
import InvestmentModal from '@/components/investmentmodal/InvestmentModal'
import RejectionApprovalModel from '@/components/rejectionapprovalmodel/RejectionApprovalModel'
import DataTable from '@/table/DataTable'
import React from 'react'

function ChangeInvestmentModal() {
  return (
    <div>
      <DataTable/>
      <InvestmentModal/>
      <RejectionApprovalModel/>
    </div>
  )
}

export default ChangeInvestmentModal

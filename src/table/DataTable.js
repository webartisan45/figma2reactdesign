import MainTable from '@/components/maintable/MainTable'
import GlobalFilter from '@/components/table/filter/globalfilter/GlobalFilter'
import TableFilter from '@/components/table/filter/tablefilter/TableFilter'
import React from 'react'
function DataTable() {
  return (
    <div>
      <GlobalFilter/>
      <TableFilter/>
      <MainTable/>
    </div>
  )
}
export default DataTable

import React from 'react'

const DashboardStatCard = ({ singleStat }) => {
  return (
    <div className=' flex flex-col items-start gap-y-1 px-3.5 py-6 border-[1.5px] border-solid border-gray-200 bg-white rounded-xl w-full col-span-3'>
      <h5 className=' text-sm text-[#7588A3]'>{singleStat.title}</h5>
      <div className={`text-3xl font-bold ${singleStat.color}`}>{singleStat.value}</div>
      <span className=' text-xs text-[#7588A3]'>{singleStat.percentageChange}</span>
    </div>
  )
}

export default DashboardStatCard
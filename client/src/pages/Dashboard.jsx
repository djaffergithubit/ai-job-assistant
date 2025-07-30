import React from 'react'
import Header from '../components/Dashboard/Header'
import DashboardStatCard from '../components/Dashboard/DashboardStatCard'
import RecentCondidatureSearchBar from '../components/Dashboard/RecentCondidatureSearchBar'
import SingleCondidature from '../components/Dashboard/singleCondidature'

const stats = [
  {
    title: 'Total candidatures',
    value: 24,
    percentageChange: '+12% ce mois-ci',
    color: 'text-blue-500'
  },
  {
    title: 'En attente',
    value: 15,
    percentageChange: 'Réponse attendue',
    color: 'text-amber-600'
  },
  {
    title: 'Entretiens',
    value: 9,
    percentageChange: 'À préparer',
    color: 'text-green-400'
  },
  {
    title: 'Taux de réponse',
    value: 68,
    percentageChange: '+15% vs mois dernier',
    color: 'text-green-600'
  }
]

const Dashboard = () => {
  return (
    <main className='w-full bg-gray-50 h-full'>
        <Header />
        <section className=' py-10 px-8 '>
            <div className='grid grid-cols-12 place-items-center gap-x-2 lg:gap-y-0 gap-y-2'>
              {
                stats.map((stat, index) => (
                  <DashboardStatCard key={index} singleStat={stat} />
                ))
              }
            </div>
            <br />
            <div className=' bg-white h-full w-full rounded-xl px-6 py-6 border-[1.5px] border-solid border-gray-200'>
              <RecentCondidatureSearchBar />
              <br />
              <section className=' flex flex-col items-start gap-y-4 w-full'>
                <SingleCondidature />
                <SingleCondidature />
                <SingleCondidature />
                <SingleCondidature />
                <SingleCondidature />
              </section>
            </div>
        </section>
    </main>
  )
} 

export default Dashboard
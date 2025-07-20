import React from 'react'

const stats = [
  {
    title: 'Candidats satisfaits',
    value: '10,000',
  },
  {
    title: 'Temps économisé',
    value: '95',
  },
  {
    title: 'Réponses positives',
    value: '40',
  },
]

const StatsComponent = () => {
  return (
    <div className=' px-1.5 py-20'>
      <ul className=' flex md:flex-row flex-col items-center justify-evenly md:gap-x-10 gap-y-10'>
        {
          stats.map((stat, index) => (
            <li className=' flex flex-col gap-y-1.5 text-center' key={index}>
              <h3 className={`lg:text-4xl text-3xl font-bold ${stat.title === "Candidats satisfaits" ? ' text-blue-600' : ' text-green-500'}`}>{stat.title === 'Candidats satisfaits' ? `${stat.value}+` : stat.title === 'Temps économisé' ? `${stat.value}%` : `+${stat.value}%`}</h3>
              <p className=' text-base text-[#7588A3]'>{stat.title}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default StatsComponent
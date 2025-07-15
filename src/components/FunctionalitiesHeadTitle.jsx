import React from 'react'

const FunctionalitiesHeadTitle = () => {
  return (
    <main className=' flex flex-col items-center justify-center mx-auto py-12 bg-gray-50'>
        <div className=' flex items-center justify-center text-sm font-medium gap-x-1.5 px-3.5 py-1.5 rounded-full text-blue-500 bg-sky-100 border-2 border-solid border-blue-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-4 h-4" data-lov-id="src/components/FeaturesSection.tsx:60:12" data-lov-name="CheckCircle" data-component-path="src/components/FeaturesSection.tsx" data-component-line="60" data-component-file="FeaturesSection.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22w-4%20h-4%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            Fonctionnalités Avancées
        </div>
        <br />
        <h2 className=' text-5xl text-gray-950 font-extrabold text-center max-w-2xl w-full'>
          Tout ce dont vous avez besoin pour <span className='gradient-text'>réussir vos candidatures</span>
        </h2>
        <br />
        <p className=' max-w-3xl w-full text-xl text-[#7588A3] text-center'>
          Une suite complète d'outils IA pour optimiser chaque étape de votre recherche d'emploi
        </p>
    </main>
  )
}

export default FunctionalitiesHeadTitle
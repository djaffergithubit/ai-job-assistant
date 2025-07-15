import React from 'react'

const FunctionalityCard = ({ functionality }) => {
  return (
    <div className=' flex flex-col items-start gap-3 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        {functionality.icon}
        <h3 className=' text-xl font-semibold'>{functionality.title}</h3>
        <p className=' text-gray-600'>{functionality.description}</p>
        <ul>
            {functionality.options?.map((option, index) => (
                <li className=' flex items-center' key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-4 h-4 text-accent mr-2 flex-shrink-0" data-lov-id="src/components/FeaturesSection.tsx:94:22" data-lov-name="CheckCircle" data-component-path="src/components/FeaturesSection.tsx" data-component-line="94" data-component-file="FeaturesSection.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20text-accent%20mr-2%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    {option}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FunctionalityCard
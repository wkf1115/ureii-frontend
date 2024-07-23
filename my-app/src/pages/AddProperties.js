import React, { useState } from 'react';
// import ProcessBar from '../components/simple';
import ProcessBar from '../components/panels_with_border';
import Icon from '../components/icons';

function App () {
    const [currentStepId, setCurrentStepId] = useState(1);
  
    const increaseStepChange = (stedId) => {
        if (stedId < 6)setCurrentStepId(currentStepId + 1);
    }

    const decreaseStepChange = (stedId) => {
        if (stedId > 1)setCurrentStepId(currentStepId - 1);
    }

    // const IconComponent = HeroIcons['HomeIcon'];
  
    return (
        <div className="relative bg-gray-100 flex flex-col min-h-screen pl-2 pr-2">
          <div className="mt-6 mb-6 font-extrabold from-neutral-200 text-3xl">
            New Property
          </div>
          <div className="border-t-2 border-gray-800 my-4 w-full"></div>
          <div className="ml-2 mr-2">
            <ProcessBar currentStepId={currentStepId} />   
          </div>
          <div className="content mx-auto">
            <div className='font-extrabold text-xl mr-7 mt-4'>Let's add your property</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <Icon iconName="BeakerIcon" className="h-12 w-12 text-gray-500" />

            <p>Content goes here...</p>
          </div>
          <div className="absolute bottom-0 right-0 flex space-x-4 mb-6 mr-10">
            <button className="h-10 px-6 mr-3 font-semibold rounded-md bg-gray-600 text-white shadow-2xl"
                    onClick={() => decreaseStepChange(currentStepId)}
            >
                Cancel
            </button>
            <button className="h-10 px-6 font-semibold rounded-md bg-indigo-600 text-white shadow-2xl" 
                    type="submit" 
                    onClick={() => increaseStepChange(currentStepId)}>
                Next
            </button>
          </div>
        </div>
      );
  }
  
  export default App;
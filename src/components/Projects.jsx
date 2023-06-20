import React from 'react';
import ProjectItem from './ProjectItem';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import complete from '../assets/complete.jpg';
import toyotab from '../assets/toyotab.jpg';

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-center text-3xl mt-8 text-gray-800">Projects</h1>
      <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />

      <p className="text-base md:text-lg lg:text-xl text-justify text-gray-700 md:text-center ml-4 py-8">
        Some of our ongoing and completed projects are showcased below
      </p>

      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={bus2}
          title='Restoring the past, preserving the future: Bringing new life to an old bus.'
        />
        <ProjectItem img={bus3} title='Bus Project Ongoing' />
        <ProjectItem
          img={toyotab}
          title='Before: "A Toyota BB in need of a makeover: Faded paint and worn-out colors."'
        />
        <ProjectItem
          img={complete}
          title='After: "A brand new look for a classic Toyota BB: Fresh paint and vibrant colors that make heads turn."'
        />
      </div>
    </div>
  );
}

export default Projects;

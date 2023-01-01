import React from 'react'
import {Merriweather} from '@next/font/google';

const merriweather = Merriweather({
  subsets:['latin'],
  weight: '400',
})
function MySkills() {
  return (
    <div className='my-20 '>
      <h2 className={`${merriweather.className} my-20 text-2xl font-bold lg:text-center`}>MY SKILLS</h2>
      <div className='' >
        <div className="grid grid-cols-2 gap-16 p-3 lg:grid-cols-4 w-full ">
          <span className='skills-round-line '><p>HTML</p></span>
          <span className='skills-round-line '><p>CSS</p></span>
          <span className='skills-round-line'><p>Tailwind</p></span>
          <span className='skills-round-line'><p>Javascript</p></span>
          <span className='skills-round-line'><p>React</p></span>
          <span className='skills-round-line'><p>Next js</p></span>
          <span className='skills-round-line'><p>Node js</p></span>
          <span className='skills-round-line'><p>Mongodb</p></span>
        </div>
      </div>
    </div>
  )
}

export default MySkills
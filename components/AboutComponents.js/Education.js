import React from 'react'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import {Merriweather} from '@next/font/google';

const merriweather = Merriweather({
  subsets:['latin'],
  weight: '400',
});

function Education() {
    return (
        <div className='mt-20 mb-24'>
            <h2 className={`${merriweather.className} my-20 text-2xl font-bold lg:text-center`}>EXPERIENCE & EDUCATION</h2>
            <div className='lg:flex'>
                <ul className="grid grid-cols-5 gap-4 mb-14 lg:w-2/4">
                    <li className='col-span-1 relative'>
                        <span className='absolute top-0 inline-block bg-yellow-500 w-10 rounded-full text-center z-20'><BsFillBriefcaseFill className='text-white m-3 font-bold  text-sm' /></span>
                        <span className='border-r-2 h-full absolute left-4 top-1'></span>
                    </li>
                    <li className='col-span-4 space-y-3'>
                        <p className='bg-slate-100 w-fit p-2 rounded-full'>July/2022 - PRESENT</p>
                        <h3>WEB DEVELOPER <span>- INNOVESTEGIA CONSULTING</span></h3>
                        <p>I am developing a project localbajar.com and successfully created An event manager app.</p>
                    </li>
                </ul>
                <ul className="grid grid-cols-5 gap-4 mb-14 lg:w-2/4">
                    <li className='col-span-1 relative'>
                        <span className='absolute top-0 inline-block bg-yellow-500 w-10 rounded-full text-center z-20'><BsFillBriefcaseFill className='text-white m-3 font-bold  text-sm' /></span>
                        <span className='border-r-2 h-full absolute left-4 top-1'></span>
                    </li>
                    <li className='col-span-4 space-y-3'>
                        <p className='bg-slate-100 w-fit p-2 rounded-full'>2021</p>
                        <h3>PARTICIPATED WEB DEVELOPMENT BOOTCAMP<span> - UDEMY</span></h3>
                        <p>I enrolled <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer" className='text-blue-400'>Web development bootcamp</a> on Udemy. And also I learn a lot of from watching tutorials on Youtube and reading Articles & Documentations.</p>
                    </li>
                </ul>

            </div>
            <div className='lg:flex'>
                <ul className="grid grid-cols-5 gap-4 mb-14 lg:w-2/4">
                    <li className='col-span-1 relative'>
                        <span className='absolute top-0 inline-block bg-yellow-500 w-10 rounded-full text-center z-20'><BsFillBriefcaseFill className='text-white m-3 font-bold  text-sm' /></span>
                        <span className='border-r-2 h-full absolute left-4 top-1'></span>
                    </li>
                    <li className='col-span-4 space-y-3'>
                        <p className='bg-slate-100 w-fit p-2 rounded-full'>2019</p>
                        <h3>RED HAT CERTIFIED SYSTEM ADMINISTRATOR</h3>
                        <p>I have also good knowledge of linux as well. I also got through RHCSA exam.</p>
                    </li>
                </ul>
                <ul className="grid grid-cols-5 gap-4 mb-10 lg:w-2/4">
                    <li className='col-span-1 relative'>
                        <span className='absolute top-0 inline-block bg-yellow-500 w-10 rounded-full text-center z-20'><BsFillBriefcaseFill className='text-white m-3 font-bold  text-sm' /></span>
                        <span className='border-r-2 h-full absolute left-4 top-1'></span>
                    </li>
                    <li className='col-span-4 space-y-3'>
                        <p className='bg-slate-100 w-fit p-2 rounded-full'>2017 - 2020</p>
                        <h3>BACHELOR DEGREE <span>- GS COLLEGE JABALPUR</span></h3>
                        <p>I successfully completed my graduation (BCom) from <a href="https://www.gscollege.org/" target="_blank" rel="noopener noreferrer" className='text-blue-400'>GS College Jabalpur</a>. </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education
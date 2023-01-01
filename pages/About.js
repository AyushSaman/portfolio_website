import React, {useRef} from 'react'
import Image from 'next/image'
import {FiDownload} from 'react-icons/fi';
import useDownloader from "react-use-downloader";
import MobileNav from '../components/MobileNav';
import MySkills from '../components/AboutComponents.js/MySkills';
import Education from '../components/AboutComponents.js/Education';
import DesktopNav from '../components/DesktopNav'
import {motion} from 'framer-motion'
import {Ubuntu_Mono} from '@next/font/google';

const ubuntuMono = Ubuntu_Mono({
  subsets:['latin'],
  weight: '700',
});


function About() {
  const myRef = useRef();

  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
useDownloader();

  function handleClick(e) {
    if (myRef.current.classList.contains("w-1/4")){
      myRef.current.classList.remove("w-1/4")
      myRef.current.classList.add("w-full")
      setTimeout(() => {
        myRef.current.classList.remove("w-full")
      myRef.current.classList.add("w-1/4")
      }, 800);
      download("/ayush_resume.pdf", "ayush_resume.pdf")
    }
    }
  return (
    <>
    
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="m-3 lg:mx-40"
      >

    <h1 className={`${ubuntuMono.className} font-sans text-5xl font-bold mx-4 mt-10 mb-10 lg:text-center lg:text-6xl`}>ABOUT <span className='text-yellow-500'>ME</span></h1>
    <Image className='rounded-full mx-auto my-6 lg:hidden' src={"/img-mobile-round.jpg"}
          alt={"dp"} width={230} height={230}
          />
    <div className='lg:grid grid-cols-6 gap-4 my-14 lg:mr-56'>
        <div className="grid grid-cols-2 gap-4 text-sm lg:text-xl col-span-4" >
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>First Name :</span><span>Ayush</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Last Name :</span><span>Saman</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Age :</span><span>23</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Nationality :</span><span>Indian</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>City :</span><span>Jabalpur, MP</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Phone :</span><span>+91 8770229235</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Language :</span><span>Hindi, English</span></div>
          <div className='flex flex-col w-32 font-semibold lg:inline m-4 lg:w-96'><span className='opacity-80 lg:mx-6'>Email :</span><span className='text-xs md:text-xl'>ayushsaman5@gmail.com</span></div>
        </div>
        <Image className='hidden rounded-3xl lg:inline col-span-2 ml-20 mr-4 ' src={"/img-mobile.jpg"}
          alt={"deckstop-dp"} width={400} height={400}
          />
    </div>
    <div className='lg:flex justify-center'>

        <button onClick={handleClick} className='outline-2 outline-yellow-500 outline mx-3 my-5 w-64 h-12 rounded-full flex items-center relative'><span className='inline-block w-3/4 text-center' >Download C.V</span> <span ref={myRef} className='inline-block bg-yellow-500 w-1/4 rounded-full transition-width duration-700	 ease absolute right-0 hover:w-full'><FiDownload className='text-white my-3 font-bold mx-5 text-2xl'/></span></button>
    </div>

    
    <MySkills/>
    <Education/>
    
    
    <DesktopNav />
    </motion.div>
    <MobileNav/>
    </>
  )
}

export default About
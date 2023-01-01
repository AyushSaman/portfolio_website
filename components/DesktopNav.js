import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {HiMailOpen} from 'react-icons/hi';
import {SiBloglovin} from 'react-icons/si';

function DesktopNav() {
  const router = useRouter()
  let currentRoute = router.pathname;
  return (
    <div className='hidden lg:flex flex-col fixed z-50 gap-28 mx-10 left-auto bottom-auto top-44 right-0'>
      <Link href="/"> <span className={`flex justify-center items-center w-14 h-14 ${currentRoute === "/" ? 'bg-yellow-500 text-white' : 'bg-slate-300'} rounded-full`}><AiFillHome className='text-xl' /></span></Link>
      <Link href="/About"><span className={`flex justify-center items-center w-14 h-14 ${currentRoute === "/About" ? 'bg-yellow-500 text-white' : 'bg-slate-300'} rounded-full`}><FaUserAlt className='text-xl'/></span></Link>
      <Link href="/Contact"><span className={`flex justify-center items-center w-14 h-14 ${currentRoute === "/Contact" ? 'bg-yellow-500 text-white' : 'bg-slate-300'} rounded-full`}><HiMailOpen className='text-xl'/></span></Link>
    </div>
  )
}

export default DesktopNav
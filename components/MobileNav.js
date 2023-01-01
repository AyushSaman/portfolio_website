import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import {HiMailOpen} from 'react-icons/hi';
import {SiBloglovin} from 'react-icons/si';

function MobileNav() {
  const router = useRouter()
  let currentRoute = router.pathname;
  return (
    <div className='block overflow-hidden fixed z-50 w-full left-0 bottom-0 top-auto right-auto lg:hidden'>

    <div className='flex justify-around shadow-3xl bg-slate-100 p-3 '>
      <Link href="/"> <span className={`flex justify-center items-center ${currentRoute === "/" ? 'bg-yellow-500' : 'bg-slate-300'} w-10 h-10 rounded-full`}><AiFillHome /></span></Link>
      <Link href="/About"><span className={`flex justify-center items-center ${currentRoute === "/About" ? 'bg-yellow-500' : 'bg-slate-300'} w-10 h-10 rounded-full`}><FaUserAlt/></span></Link>
      <Link href="/Contact"><span className={`flex justify-center items-center ${currentRoute === "/Contact" ? 'bg-yellow-500' : 'bg-slate-300'} w-10 h-10 rounded-full`}><HiMailOpen/></span></Link>
      {/* <Link href="/blogs"><span className={`flex justify-center items-center ${currentRoute === "/Blogs" ? 'bg-yellow-500' : 'bg-slate-300'} w-10 h-10 rounded-full`}><SiBloglovin/></span></Link> */}
      </div>
    </div>
  )
}

export default MobileNav
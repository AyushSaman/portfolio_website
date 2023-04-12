
import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MobileNav from '../components/MobileNav';
import DesktopNav from '../components/DesktopNav'
import {motion} from 'framer-motion'

export default function Home() {
  const myRef = useRef();
  const router = useRouter()

  function handleClick(e) {
    if (myRef.current.classList.contains("w-1/4")) {
      myRef.current.classList.remove("w-1/4")
      myRef.current.classList.add("w-full")
      e.preventDefault();
      setTimeout(() => {
        router.push('/About');
      }, 800);
    }
  }

  return (
    <>
    
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="overflow-hidden"
      >
      
      <div className='flex flex-col items-center justify-center h-screen leading-6 lg:flex-row text-left overflow-hidden'>
      <div className='w-screen h-full overflow-hidden -z-10 absolute'>
      <div id='yellow-background' className='lg:bg-yellow-500 h-full w-3/5 absolute rotate-70 -left-1/3 top-28'></div>
      </div>
        <Image className='rounded-full lg:hidden ' src={"/img-mobile-round.jpg"}
          alt={"mobile-dp"} width={230} height={230}
        />
        <Image className='hidden rounded-3xl lg:inline mt-6 ml-20 mr-14' src={"/img-mobile.jpg"}
          alt={"deckstop-dp"} width={410} height={300}
        />
        <div className='text-center'>
          <div className='my-5 text-3xl lg:text-6xl font-bold'>
            <h1 className='text-yellow-500 lg: my-3'>I AM AYUSH SAMAN</h1>
            <h2>WEB DEVELOPER</h2>
          </div>
          <div><p className='leading-8 text-lg'>
            I am a web developer from Jabalpur, Madhya Pradesh. I am quite good at creating MERN stack web application.
          </p>
          </div>
          <div className='flex justify-center items-center lg: my-3' >
        <Link href="/about" onClick={handleClick}>
          <button className='outline-2 outline-yellow-500 outline my-5 w-64 h-12 rounded-full flex items-center relative  '>
            <span className='inline-block w-3/4 text-center' >MORE ABOUT ME</span>
            <span ref={myRef} className='inline-block bg-yellow-500 w-1/4 rounded-full transition-width duration-700 ease absolute right-0 hover:w-full'>
              <AiOutlineArrowRight className='text-white my-3 font-bold mx-5 text-3xl' />
            </span>
          </button>
        </Link>
          </div>
        </div>
        <div className='lg:mx-10 w-14'></div>
      </div>
        <DesktopNav />
    </motion.div>
      <MobileNav /> 
    </>
  )
}

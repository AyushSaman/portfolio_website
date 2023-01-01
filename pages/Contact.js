import React, { useRef } from 'react'
import MobileNav from '../components/MobileNav';
import { IoIosSend } from 'react-icons/io';
import { HiMailOpen } from 'react-icons/hi';
import { BsFillMapFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import DesktopNav from '../components/DesktopNav'
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion'
import {Ubuntu_Mono, Merriweather} from '@next/font/google';

const ubuntuMono = Ubuntu_Mono({
  subsets:['latin'],
  weight: '700',
})
const merriweather = Merriweather({
  subsets:['latin'],
  weight: '400',
})

function Contact() {
  const myRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value
      field.value = ""
    });
    // console.log(formData);
    const {email,message,name,subject} = formData;
    let res = await fetch('https://mymessages-20166-default-rtdb.firebaseio.com/messages.json', {
      method: 'post',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify({
        email,message,name,subject
      })
    });
    if (res.status === 200) {
      toast.success("Message sent successfully. I will reach you out soon!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.error('Sorry! something went wrong. please try again later', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
  }


  function handleClick(e) {
    if (myRef.current.classList.contains("w-1/4")) {
      myRef.current.classList.remove("w-1/4")
      myRef.current.classList.add("w-full")
      setTimeout(() => {
        myRef.current.classList.remove("w-full")
        myRef.current.classList.add("w-1/4")
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
      >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    
        <h1 className={`${ubuntuMono.className} font-sans text-5xl font-extrabold mx-4 my-10 lg:text-center lg:text-6xl`}>GET IN <span className='text-yellow-500'>TOUCH</span></h1>
    <div className='mx-3 my-6 lg:flex lg:m-20'>
      <div className='lg:mr-5'>
        <div className='my-7'>
          <h2 className={`${merriweather.className} font-sans mt-8 mb-3 text-2xl`}>DO NOT BE SHY !</h2>
          <p>
            Feel free to get in touch with me. I am always open to have conversations with you.
          </p>
        </div>

        <div className='flex gap-7 mb-8'>
          <BsFillMapFill className='text-3xl text-yellow-500' />
          <div>
            <p>
              ADDRESS
            </p>
            <p>
              52 Hansika city, Gwarighat, Jabalpur, MP, India 482008
            </p>
          </div>
        </div>

        <div className='flex gap-7 mb-8'>
          <HiMailOpen className='text-3xl text-yellow-500' />
          <div>
            <p>
              MAIL ME
            </p>
            <p>
              ayushsaman5@gmail.com
            </p>
          </div>
        </div>

        <div className='flex gap-7 mb-8'>
          <BsFillTelephoneFill className='text-3xl text-yellow-500' />
          <div>
            <p>
              CALL ME
            </p>
            <p>
              +91 8770229235
            </p>
          </div>
        </div>
        </div>
        <form method='post' onSubmit={handleSubmit}>

          <input type="text" id="name" name="name" placeholder='YOUR NAME' className="w-full mb-8 bg-white rounded-full border-2 border-yellow-500  focus: text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required autoComplete='off'/>

          <input type="email" id="email" name="email" placeholder='EMAIL' className="w-full mb-8 bg-white rounded-full border-2 border-yellow-500 focus: text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>

          <input type="text" id="subject" name="subject" placeholder='SUBJECT' className="w-full mb-8 bg-white rounded-full border-2 border-yellow-500 focus: text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>

          <textarea id="message" name="message" placeholder='YOUR MESSAGE' className="w-full mb-8 bg-white rounded-3xl border-2 border-yellow-500 focus: h-32 text-base outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>

          <button onClick={handleClick} className='outline-2 outline-yellow-500 outline mx-3 mt-2 mb-24 w-64 h-12 rounded-full flex items-center relative'><span className='inline-block w-3/4 text-center' >SEND MESSAGE</span> <span ref={myRef} className='inline-block bg-yellow-500 w-1/4 rounded-full transition-width duration-700	 ease absolute right-0 hover:w-full'><IoIosSend className='text-white my-3 font-bold mx-5 text-2xl' /></span></button>
        </form>
        <div className='lg:mx-10 w-14'></div>
      </div>
      <DesktopNav />
      </motion.div>
      <MobileNav />
      </>
  )
}

export default Contact
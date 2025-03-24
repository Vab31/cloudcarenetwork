import React from 'react'
import Link from "next/link";



export default function Nav() {
  return (
    <div className='bg-blue-500'>
<header className="text-black body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-20 h-20">
      <img src='/images/logo.png'/>
  </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
      {/* <a className="mr-5 hover:text-gray-900">Course</a> */}
      <a className="mr-5 hover:text-gray-900" href='/imggallery'>Testimonials</a>
      <a className="mr-5 hover:text-gray-900" href='/treatment'>Treatments</a>

      {/* <a className="mr-5 hover:text-gray-900">Blogs</a> */}
      <Link className="mr-5 hover:text-gray-900" href='/about'>About US</Link>
    </nav>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSekoxlGLK7bjxfu8-8kCs3gUTDg0rd4joEDYiUlnRAkLgpslg/viewform?usp=header'>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Book a CheckUp
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </a>
  </div>
</header>


   </div>
  )
}

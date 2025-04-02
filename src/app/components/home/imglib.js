import React from 'react'

export default function Imglib() {
  return (
    <div> 
<section className="text-gray-600 body-font" id='imgid'>
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 text-center">Testimonials</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">A seamless platform for storing, accessing, and sharing medical records to ensure timely checkups and improved healthcare outcomes.</p>
    <div className="flex flex-wrap -m-4 mt-10">
      {["img2.jpeg", "img8.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg"].map((img, index) => (
        <div key={index} className="lg:w-1/3 sm:w-1/2 w-full p-4">
          <div className="flex relative h-80">
            <img alt="gallery" className="absolute inset-0 w-full h-full border-2 shadow-2xl object-cover object-center rounded-xl" src={`/images/${img}`}/>
            <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-white opacity-10 hover:opacity-0"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  )
}

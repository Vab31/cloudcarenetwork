import React from 'react'

export default function Us() {
  return (

    <div>
      <div
        className="relative h-80 w-full  bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.webp')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Text content */}
        <div className="relative flex items-center justify-center h-full text-center px-5">
          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
              "Your Health is Your Greatest Wealth"
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
              Regular checkups can prevent future health issues. Take care of your body—it's the only place you have to live.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full pt-10 mt-10 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">Our CloudCare Network</h1>
      </div>
      <div>
        {/* <p className="font-medium text-xl mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-36 leading-relaxed text-center">
              At CloudCare, we believe that healthcare should be accessible, efficient, and patient-centered. Our journey began with a simple yet powerful realization—hospitals are often overwhelmed, patients struggle with accessibility, and the healthcare system needs a transformation. We saw an opportunity to bridge these gaps by leveraging technology to redefine the way care is delivered.

CloudCare was born with a mission to create a seamless, virtual healthcare ecosystem that empowers both hospitals and patients. By enabling virtual hospitals, we help healthcare providers enhance operational efficiency, reduce costs, and expand their reach beyond physical boundaries. For patients, our platform offers the convenience of remote consultations, continuous monitoring, and personalized care—ensuring that quality healthcare is just a click away.

With real-time communication, valuable insights, and a commitment to value-based care, CloudCare is revolutionizing healthcare accessibility. We are not just a platform; we are a movement toward a smarter, more connected, and compassionate healthcare future.

Join us in shaping the future of healthcare—where care knows no boundaries.


        </p> */}

      </div>







      {/* <img className='my-20' src='/images/aboutus2.png' />

<div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">Our Mission</h1>
    </div>
    <div> */}
      <p className="font-medium text-xl mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-36 leading-relaxed text-center text-gray-900">

        CloudCare Network is dedicated to providing accessible, affordable, and high-quality healthcare services. We specialize in dental checkups, eye examinations, and general health checkups, ensuring preventive care for all. With expert doctors, state-of-the-art facilities, and seamless online appointments, we make healthcare hassle-free. Our mission is to bridge the gap between medical advancements and accessibility, prioritizing prevention over cure for a healthier future.
      </p>

      {/* </div> */}



    </div>


  )
}

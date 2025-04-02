import React from "react";
// import Img from './image.png';

export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border-2 rounded-2xl shadow-blue-950">
            <img
              className="object-cover object-center rounded-2xl shadow-2xl shadow-black"
              alt="hero"
              src="/images/headshot.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About the
              <span className="text-blue-800 font-extrabold ">
                {" "}
                &nbsp;Founder
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Ssavya Garg is a dynamic entrepreneur with a background in
              economics, business and the arts. A top performer in the NSE
              Competition, he has also hosted an entrepreneurship conference and
              led as Editor-in-Chief of his publication house. With experience
              in dramatics in Cannes, proficiency in Spanish, and a unique
              prisoner-based certification, he brings a global and
              multidimensional perspective to his ventures.
            </p>
            <div className="flex justify-center">
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSekoxlGLK7bjxfu8-8kCs3gUTDg0rd4joEDYiUlnRAkLgpslg/viewform?usp=header'>

              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Book Checkups
              </button>
              </a>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

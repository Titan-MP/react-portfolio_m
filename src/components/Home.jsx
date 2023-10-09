import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Portrait from "../assets/Portrait.jpeg";
import {Link} from 'react-scroll';



import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b  from-gray-950 via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto my- flex flex-col items-center justify-center h-full px-4 md:flex-row pt-'>
            <div className='flex flex-col justify-center h-full pt-20'>
            <div className='w-[200px]'>
             <img src= {Portrait} alt="Portrait" className='rounded-full mx-auto'/>
            </div>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    My name is Marc Rhymaun
                </h2>
                <h2 className="flex md:text-3xl text-2xl pt-4 text-blue-600">
            I am a
            <TypeAnimation
              sequence={["Developer", 1000, "Coder", 1000, "Creator", 1000]}
              wrapper="div"
              speed={30}
              style={{ fontSize: "1em", paddingLeft: "8px" }}
              repeat={Infinity}
            />
          </h2>
                <p className='py-4 text-white max-w-md'>
                I'm, a full-stack web developer passionate about creating seamless digital experiences. With expertise in front-end technologies like HTML, CSS, and JavaScript, I craft visually appealing and user-friendly interfaces. On the back-end, I build robust, scalable systems using various programming languages and frameworks. My true strength lies in bridging front-end and back-end development, connecting design with functionality. Lifelong learning drives me to stay updated with the latest web technologies, and I thrive in collaborative team environments. Let's work together to turn your web project into something amazing.
                </p>
                
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-950 to-blue-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight size={25} className="ml-2"/>
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home
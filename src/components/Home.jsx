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
                <p className='py-4 text-white max-w-md'>
                I'm a devoted full-stack web developer, driven to create immersive digital experiences. I stay on the cutting edge of web development trends and relish collaborating with diverse teams to craft groundbreaking digital products. Let's connect and embark on an extraordinary journey of creation!
                </p>
                
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-950 to-yellow-800 cursor-pointer'>
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
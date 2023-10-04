import React from 'react'
import Javascript from '../assets/icons/javascript.png';
import CSS from '../assets/icons/css.png';
import HTML from '../assets/icons/html.png';
import MongoDb from '../assets/icons/mongo.png';
import NodeJs from '../assets/icons/node.png';
import ReactIcon from '../assets/icons/react.png';

const Contact = () => {
    const portfolios = [
        {
            id:1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: NodeJs,
            title: 'NodeJs',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src: MongoDb,
            title: 'MongoDb',
            style: 'shadow-green-300'
        },
        {
            id:6,
            src: ReactIcon,
            title: 'React',
            style: 'shadow-cyan-400'
        },
    ]
  return (
    <div name= 'experience' className='bg-gradient-to-b from-gray-900 via-black to-gray-950 w-full h-screen'>
        <div className = 'max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className="text-center sm:pb-8 sm:mt-20">
                <p className='text-4xl font-bold  inline border-b-4 border-slate-50 p-2'>Experience</p>
                <p className='py-6'>Technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                    <img src= { src } alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>   
             ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react';
import weatherEvents from '../assets/weatherEvents.png';
import NoteTaker from '../assets/NoteTaker.png';
import Yumster from '../assets/Yumster.png';
import JATE from '../assets/JATE.png';
import WorkdayScheduler from '../assets/WorkdayScheduler.png';
import Mocktrade from '../assets/Mocktrade.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Yumster,
      href: ' https://ymster-3e5525cf81e8.herokuapp.com/#homepage',
      href2: 'https://github.com/Titan-MP/yumster.git',
    },
    {
      id: 2,
      src: WorkdayScheduler,
      href: 'https://titan-mp.github.io/Workday-Scheduler/',
      href2: 'https://github.com/Titan-MP/Workday-Scheduler.git',
    },
    {
      id: 3,
      src: JATE,
      href: 'https://pwajate-text-editor-64e0b83af6c5.herokuapp.com/',
      href2: 'https://github.com/Titan-MP/Text-editor.git',
    },
    {
      id: 4,
      src: weatherEvents,
      href: 'https://titan-mp.github.io/weather-event/',
      href2: 'https://github.com/Titan-MP/weather-event.git',
    },
    {
      id: 5,
      src: NoteTaker,
      href: 'https://notestaker-ucf-f955702f5072.herokuapp.com/',
      href2: 'https://github.com/Titan-MP/Note-Taker.git',
    },
    {
      id: 6,
      src: Mocktrade,
      href: 'https://evening-cove-86281-90fe49d2ca40.herokuapp.com',
      href2: 'https://github.com/Titan-MP/Quit-Playing-Games-With-My-Stocks.git',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-950 via-black to-gray-900 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center sm:pb-8 sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-slate-50 my-4 sm:text-left">Portfolio</p>
          <p className="py-6">Here are some examples of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-xl shadow-blue-900 rounded-xl">
              <a href={href} className="flex justify-between items-center w-full text-white">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              </a>
              
              

              <div className="flex item-center justify-center">
              <a href={href}>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">Demo</button>
              </a>
              <a href={href2}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">Code</button>
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

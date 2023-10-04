import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 text-center sm:pb-8 sm:mt-10"> 
          <p className="text-4xl font-bold inline border-b-4 border-slate-50 my-4 sm:text-left">About</p> 
        </div>
        <div className="max-w-6xl mx-auto"> 
          <p className="text-xl text-center sm:mt-3"> 
            Hello and welcome! I'm Marc, a Full Stack Developer with expertise in various technologies. My passion is crafting exceptional web experiences. Proficient in HTML, CSS, JavaScript, and popular frameworks, I create functional and user-friendly websites. I'm committed to learning and thrive in collaborative environments. Beyond coding, I enjoy hardware projects, tech meetups, and sharing insights through my blog. Let's create web solutions that exceed expectations. If you need a dedicated Full Stack Developer, let's connect.
          </p>
          <br />
          <p className="text-xl text-center  sm:mt-4"> 
          My objective is to create resilient and user-centric web applications that not only meet but surpass client aspirations. When I'm not immersed in coding, you'll discover me delving into novel technologies, working closely with interdisciplinary teams, and relentlessly expanding the horizons of what the internet can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

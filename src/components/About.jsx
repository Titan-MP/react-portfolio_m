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
          Hello there, and welcome to my corner of the digital world! I'm Marc, a budding Full Stack Developer who's enthusiastic about the world of technology. Creating exceptional web experiences is what drives me in this exciting journey as a beginner in the field. With a toolkit that includes HTML, CSS, JavaScript, and popular frameworks, I'm focused on honing my skills to craft websites that not only function seamlessly but also captivate users. I'm on a mission to learn and grow, eager to take on new challenges and contribute to collaborative projects. Outside of coding, I'm always up for hands-on hardware projects, attending tech meetups, and cherishing quality moments with my family. I believe that every connection made is an opportunity for growth, and I'm here to explore how I can contribute to your web projects. If you're in search of an enthusiastic beginner Full Stack Developer who shares your passion for progress, I'd love to connect. Together, we can work on bringing your web ideas to life. Let's take the first step toward making it happen.
          </p>
          <br />
          <p className="text-xl text-center  sm:mt-4"> 
          My goal is to develop robust and user-focused web applications that not only meet but exceed the expectations of our clients. When I'm not passionately coding, you'll find me exploring emerging technologies, collaborating closely with diverse teams, and continuously pushing the boundaries of what technology can offer. I'm always up for a challenge, and I'm excited to see what we can achieve together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

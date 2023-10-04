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
            Hello and welcome! My name is Francisco. I'm a passionate Full Stack Web Developer with a love for turning ideas into digital solutions. With a strong background in both front-end and back-end development, I thrive in the ever-evolving world of web technologies. I enjoy crafting seamless user experiences using HTML, CSS, and JavaScript, while also diving into server-side technologies like Node.js.
          </p>
          <br />
          <p className="text-xl text-center  sm:mt-4"> 
            My goal is to build robust, user-friendly web applications that not only meet but exceed client expectations. When I'm not coding, you'll find me exploring new technologies, collaborating with cross-functional teams, and continuously pushing the boundaries of what the web can offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Icons = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/marcrhymaun/',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/Titan-MP',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ul className="flex flex-wrap">
            {Icons.map(({ child, href }) => (
              <li key={href} className="p-6">
                <a href={href}>{child}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center pb-7">©2023 Titan-MP</p>
      </div>
    </footer>
  );
};

export default Footer;

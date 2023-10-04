import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';


const links = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'portfolio'
  },
  {
    id: 4,
    link: 'experience'
  },
  {
    id: 5,
    link: 'contact'
  },
]

const Navigation = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-25 text-white bg-gray-950 fixed'>

      <div>
      <h1 className="p-5 text-7xl font-signature">M.Rhymaun</h1>
      </div>

<ul className='hidden md:flex'>

{links.map(({id, link}) => (
<li key={id} className='px-10 cursor-pointer capitalize font-medium text-white hover:scale-150 duration-200'>

<Link to={link} smooth duration={500}>{link}</Link>

</li>
))}
</ul>

<div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden"> 
  {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
</div>

{nav &&(
  <ul className='flex flex-col justify-center items-center 
  absolute top-0 w-full h-screen bg-gradient-to-b  from-gray-950 to-gray-900'>
    {links.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200'>
        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
      </ul>
)}

</div>

  )
}

export default Navigation



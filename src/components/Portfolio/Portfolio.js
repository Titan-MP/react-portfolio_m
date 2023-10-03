import './Portfolio.css';
import projects from './projects';
import { useEffect } from 'react';

const Portfolio = () => {

    // useEffect(() => {
    //     projects.map((project, i) => {
    //         document.getElementById('nav').innerHTML += `<a href='#project${i}'>${project[i].name}</a>`;
    //         document.getElementById('project').innerHTML += `
    //             <div id='project${i}' className='project' key=${i}>
    //                 <h3>${project[i].name}</h3>
    //                 <img src=${project[i].image} alt=${project[i].name} />
    //                 <div className="info">
    //                     <p>${project[i].description}</p>
    //                     <p><a href=${project[i].github}>GitHub</a></p>
    //                     <p><a href=${project[i].deployed}>Deployed</a></p>
    //                 </div>
    //             </div>
    //         `;
    //     })
    // }

    // projects.map((project, i) => {
    //     document.getElementById('nav').innerHTML += `<a href='#project${i}'>${project.name}</a>`;
    //     <div className='project' key={i}>
    //         <h3>{project.name}</h3>
    //         <img src={project.image} alt={project.name} />
    //         <div className="info">
    //             <p>{project.description}</p>
    //             <p><a href={project.github}>GitHub</a></p>
    //             <p><a href={project.deployed}>Deployed</a></p>
    //         </div>
    //     </div>
    // })

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>

            <div id='projects'>
                <nav id='nav'></nav>
                <div id='project' className='project'></div>
            </div>
        </div>
    )
}


export default Portfolio;
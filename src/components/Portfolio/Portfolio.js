import './Portfolio.css';
import projects from './projects';

const Portfolio = () =>
    <div className='portfolio'>

        {
            projects.map((project, i) =>
                <div className='project' key={i}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} />
                    <div className="info">
                        <p>{project.description}</p>
                        <p><a href={project.github}>GitHub</a></p>
                        <p><a href={project.deployed}>Deployed</a></p>
                    </div>
                </div>
            )
        }
    </div>


export default Portfolio;
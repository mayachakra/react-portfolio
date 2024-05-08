import React from 'react';

const Project = ({title, image, deployedLink, githubLink}) => {
    return (
        <div className = "project-card">
            <div className='project-image-container'>
            <img src={image} alt={title} className="project-image"></img>
            <div className='overlay'>
            <h3>{title}</h3>
            </div>
            </div>
            <div className="project-links">
            <a href={deployedLink} target="_blank">
                Deployed App
            </a>
            <br></br>
            <a href={githubLink} target="_blank">
                GitHub Repo
            </a>
            </div>
        </div>   
    );
};

export default Project;


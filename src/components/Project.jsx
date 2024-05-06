import React from 'react';

const Project = ({title, image, deployedLink, githubLink}) => {
    return (
        <div className = "project-card">
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <div className="project-links">
                <a href={deployedLink} target="_blank">
                    Deployed App
                </a>
                <a href={githubLink} target="_blank">
                    GitHub Repo
                </a>
            </div>
        </div>   
    );
};

export default Project;
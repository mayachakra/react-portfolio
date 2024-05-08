import React from 'react';
import {useState, useEffect} from 'react';
import Project from '../components/Project';

const Portfolio = () => {

    const [projects, setProjects]= useState([]);
    useEffect(() => {
        const fetchProjects = [
            {
                id:1,
                name: 'TimeSavor',
                image: 'https://i.pinimg.com/564x/b5/0f/41/b50f41c8aa72fd30882f3d4220b687d6.jpg',
                deployedLink: 'https://lovertab.github.io/timesavor/',
                githubLink: 'https://github.com/Lovertab/timesavor',
            },
            {
                id:2,
                name: 'PokePortal',
                image: 'https://i.pinimg.com/564x/c3/63/c2/c363c294bef47a839ba34cfa407cbde2.jpg',
                deployedLink: 'https://pokeportal.onrender.com/',
                githubLink: 'https://github.com/mayachakra/pokePortal',
            },
            {
                id:3,
                name: 'Text-Editor',
                image: 'https://i.pinimg.com/736x/8d/75/9c/8d759ce8ec222df873c6da2ef10fd673.jpg',
                deployedLink: 'https://pwa-text-editor-7wwo.onrender.com/',
                githubLink: 'https://github.com/mayachakra/pwa-text-editor',
            },
            {
                id:4,
                name: 'Tech-Blog',
                image: 'https://i.pinimg.com/564x/c2/e8/6f/c2e86faf690eda3634f422722f2d2682.jpg',
                deployedLink: 'https://tech-blog-mvc.onrender.com/',
                githubLink: 'https://github.com/mayachakra/tech-blog-MVC',
            },
            {
                id:5,
                name: 'Kanban Task Board',
                image: 'https://i.pinimg.com/564x/21/02/4a/21024a1b11832556dcdc2129121932df.jpg',
                deployedLink: 'https://mayachakravarty.com/API-task-board-hw5/',
                githubLink: 'https://github.com/mayachakra/API-task-board-hw5',
            },
            {
                id:6,
                name: 'NoteTaker',
                image: 'https://i.pinimg.com/564x/c8/87/44/c88744bbe277b41facf3e4cf7736e1ad.jpg',
                deployedLink: 'https://notetaker-express.onrender.com/',
                githubLink: 'https://github.com/mayachakra/notetaker-express',
            },
        ];
        setProjects(fetchProjects);
    }, []);


    return(
        <div className='portfolio-page'>
            <h1>Portfolio</h1>
            <p>View the cards below for a deeper look into some projects:</p>
            <div className='projects-container'>
                {projects.map(project => (         
                    <Project
                        key={project.id}
                        title={project.name}
                        image={project.image} //change image
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                        
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
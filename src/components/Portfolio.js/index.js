import React, { useState } from 'react';

const Portfolio = ({ work }) => {
    const [photos] = useState([
        {
            name: "Brugh's Tech Blog",
            deployed: 'https://dry-fjord-22880.herokuapp.com/',
            github: 'https://github.com/AshtonBrugh/CMS-style-blog-site'
        },
        {
            name: "Work Day Scheduler",
            deployed: 'https://ashtonbrugh.github.io/daily-planner-web-api/',
            github: 'https://github.com/AshtonBrugh/daily-planner-web-api'
        },
        {
            name: "Javascript Code Quiz",
            deployed: 'https://ashtonbrugh.github.io/javascript-quiz/',
            github: 'https://github.com/AshtonBrugh/javascript-quiz'
        },
        {
            name: "Personality Quiz",
            deployed: 'https://hidden-plains-33333.herokuapp.com/',
            github: 'https://github.com/AshtonBrugh/project-two'
        },
        {
            name: "Password Generator",
            deployed: "https://ashtonbrugh.github.io/Password-Generator/",
            github: "https://github.com/AshtonBrugh/Password-Generator"
        },
        {
            name: "Weather Dashboard",
            deployed: "https://ashtonbrugh.github.io/weather-dashboard/",
            github: "https://github.com/AshtonBrugh/weather-dashboard"
        }
    ])

    const currentWork = photos.filter(photo => photo.work === work);

     return (
            <div className="portfolio-container">
                <h1 className="portfolio-header">My Work</h1>
            {currentWork.map((image, i) => (
                <div key={image.name} className ="portfolio-div">
                    <h2 className="image-name">{image.name}</h2>
                    <a href={image.deployed} target="_blank" rel='noreferrer' className="ahref">
                    <img
                    src={require(`../../assets/images/${i}.jpg`)}
                    alt={image.name}
                    key={image.name}
                    className="work-image"
                 />
                 </a>
                 <a href={image.github} target="_blank" rel='noreferrer' className="gitlink">{image.github}</a>
                </div>
            ))}
            </div>
        );
    };
    

export default Portfolio;




//export should be default
import React from 'react';

export default function AboutMe() {
    return(
        <div className="about-me-container">
            <h2>About Me</h2>
            <div className='about-me-content'>
                <div className='avatar'>
                    <img src="../images/giphy.gif" alt="Maya's Placeholder Gif"></img>
                </div>
                <p>
                Hi, my name is Maya Chakravarty and I am a recent Graduate from St. John's University with a Bachelor of Applied Science - BASc in Computer Science.
                I am pursuing a career in Full Stack Development and am currently enrolled in a coding bootcamp for Full Stack
                working with essential languages, libraries and platforms for web development. 
                My academic background has prepared me prioritizing a strong understanding of the fundamentals of programming,
                data structures and algorithms, and software design methods.
                </p>
            </div>
        </div>
    );
}
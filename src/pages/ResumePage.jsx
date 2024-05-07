import React, {useEffect} from 'react';
const ResumePage = () => {
    useEffect(() => {
        //add event info here
        //resume was previously experience, check the css
    }, []);
    return(
        <div id="resume"> 
        <section class="hidden">
                 <h1 class="subtitle">Resume</h1>
                 <h2>
                    click on each tab to see skills, work, and project experience. 
                </h2>
                <div class="professional" id="work/internships">
                    <ul>
                        <li><a href=" https://www.melaninis.co/" target="_blank"><strong>Melanin Is…</strong></a>
                        <br></br>
                        <small>Website Designer and Optimization | Remote Internship | May 2023-July 2023</small> 
                        <br></br>	
                            Utilized shopify to create, improve, and renovate the Melanin is… website to align with the company's image
                            while increasing user functionality and accessibility.
                            Check on SEO (Search Engine Optimization) by conducting website audits to identify areas for improvement, such as page speed and mobile responsiveness
                        </li>
                        <br></br>
                        <li><a><strong>Code Ninjas</strong></a>
                        <br></br><small>Tutor/Office Manager | Astoria, NY | June 2021-April 2022 </small> 
                        <br></br>	
                        Educated children (ages 5-14) on computer science fundamentals using Scratch and taught classes for game development with Javascript
                        Utilized Microsoft Office for scheduling student pick-ups, contacting clients, and maintaining accurate center status
                        </li>
                    </ul>
                </div>

                <div class="academic" id="academic">
                    <ul>
                        <li><a href="https://github.com/agonis21/cpoolfinal" target="_blank"><strong>Carpool GUI Project</strong></a>
                            <br></br>
                            Created a program to rent out a vehicles computational power allowing users to sign up and either rent the power
                            or provide the vehicle power for rental through an interactive GUI using Java Swing and MySQL for a functional database to
                            store, save, and input information
                           
                            This link, <a href="https://github.com/steven-h-rogers/CarpoolUnified" target="_blank"></a><strong>here</strong>, had to be relocated to the above link due to merge issues 
                            and is included to provide accurate representation of member contributions
                        </li>
                        
                        <li><a href="https://lovertab.github.io/timesavor/" target="_blank"><strong>Time-Savor</strong></a>
                        <br></br>
                            Created a website with a group to allow users to request a certain meal with specifications such as food exclusions and
                            a time frame and are met with recipes related to that search according to their specifications. Utilized two API's, one 
                            for recipes and one for YouTube tutorials, concepts such as MVC and libraries such as jQuery and Bootstrap for styling
                        </li>
                    </ul>
                </div>

                <div class="personal" id="personal">
                    <ul>
                        <li><a href="https://mayachakravarty.com/" target="_blank"><strong>Portfolio Site</strong></a>
                        <br></br>
                            Created a website using HTML, Javascript, CSS, and Bootstrap intended to act as a virtual and interactive resume with a 
                            functioning navigation bar to different areas of the page and functioning links. Utilized JQuery and APIs for transitions and
                            form handling. Included exterior images and links and had the site live through GitHub
                        </li>
                    </ul>
                </div>
                <div class="skilla" id="skills">
                    <ul>
                        <h3>Skills</h3>
                        <li>
                        <br></br>
                            here are all my skills:

                        </li>
                    </ul>
                </div>
         </section>
 </div>
    );
}

export default ResumePage;
import React, {useEffect} from 'react';
const ResumePage = () => {
    useEffect(() => {
        const toggleCard = (element) => {
            element.classList.toggle('is-flipped');
        };
        const cards = document.querySelectorAll('.content');
        cards.forEach((card) => {
            card.addEventListener('click', () => toggleCard(card)); //click event listener for each card
        });
        return () => {
            cards.forEach((card) => {
                card.removeEventListener('click', () => toggleCard(card));
            });
        };
        //add event info here
        //resume was previously experience, check the css
        //add this with the resume.png
        //<img src="resume.png" style=" width:100px; height:100px; opacity: 90%;">
    }, []);
    return(
        <div id="resume"> 
        <a href="../images/Maya Chakravarty Resume.pdf" target="_blank" download="Maya Chakravarty Resume.pdf"> 
        <h1 class="subtitle">Resume</h1>
        </a>
         <p>You can dowload my resume by clicking the title above!</p>
        <h3>Click each card to reveal their respective information.</h3>
                    <div class="cardcontainer">
                        <div class="content" onclick="toggleCard(this)">
                            <div class="innercard">
                                <div class="frontcard">
                                    <h3>Front-End Technologies</h3>
                                </div>    
                                <div class="backcard">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>PHP</li>
                                        <li>jQuery</li>
                                        <li>Responsive Design</li>
                                        <li>React</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="content" onclick="toggleCard(this)">
                            <div class="innercard">
                                <div class="frontcard">
                                    <h3>Backend-End Technologies</h3>
                                </div>    
                                <div class="backcard">
                                    <ul>
                                        <li>APIs</li>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>MySQL, Sequelize</li>
                                        <li>MongoDB, Mongoose</li>
                                        <li>REST, RESTFul APIs</li>
                                        <li>GraphQL</li>
                                        <li>NoSQL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="content" onclick="toggleCard(this)">
                            <div class="innercard">
                                <div class="frontcard">
                                    <h3>Methodologies, Patterns, and Concepts</h3>
                                </div>    
                                <div class="backcard">
                                    <ul>
                                        <li>RESTful APIs</li>
                                        <li>MVC(Model-View-Controller)</li>
                                        <li>TDD(Test-Driven-Development)</li>
                                        <li>JUnit</li>
                                        <li>Agile</li>
                                        <li>Scrum</li>
                                        <li>Kanban</li>
                                        <li>Waterfall</li>
                                        <li>Singleton</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="content" onclick="toggleCard(this)">
                            <div class="innercard">
                                <div class="frontcard">
                                    <h3>Software Engineering Tools and Proficiencies</h3>
                                </div>    
                                <div class="backcard">
                                    <ul>
                                        <li>Java, Java Swing</li>
                                        <li>Python</li>
                                        <li>C++</li>
                                        <li>Git</li>
                                        <li>Github</li>
                                        <li>Eclipse, Intellij</li>
                                        <li>Visual Studio Code</li>
                                        <li>Insomnia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default ResumePage;
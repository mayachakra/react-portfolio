const ContactPage = () => {
    return(
        
        <div className="contact-form">
                     <h1 class="subtitle"><strong>Contact Me</strong></h1>
                     <p>If you would like to reach out you may fill out the form below to send an email! </p>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="8a4c1186-cf94-4029-9501-88c1b0c83d77"></input>
                            <label for="name">Enter name:</label>
                            <input type="text" name="name" required></input>
                            <label for="email">Enter email:</label>
                            <input type="email" name="email" required></input>
                            <label for="emailsubject">Enter email subject:</label>
                            <input type="emailsubject" name="emailsubject" required></input>
                            <label for="message">Enter message:</label>
                            <textarea name="message" required></textarea>
                            <div className="container">
                            <button type="submit">Submit Form</button>
                            </div>
                        </form>            
        </div>
    );
}

export default ContactPage;
import {useState} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const isSubmitDisabled = !firstName || !LastName || !email || !message;

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_iu7ih1v';
    const templateID = 'template_sxjbej8';
    const publicKey = '1zDewYhPnTD7v0kWr';

    const templateParams = {
      from_name: `${firstName} ${LastName}`,
      from_email: email,
      to_name: 'Aayush Sharma',
      message: message,
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status,response);
      setSuccessMessage('Message sent successfully!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => {
        setSuccessMessage(null);
      },2000);

    }, (err) => {
      console.log('FAILED...', err);
    });
  }
    return (
      <section id="Contact" className="contact--section">
        <div className="contact--heading">
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
          Open to new opportunities and collaborations. 
          <br />If my work aligns with your vision, I'd love to hear from you. 
          <br />Let's connect and explore the possibilities!
          </p>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn" onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
            {successMessage && (
          <div className="success-message">
           <p>{successMessage}</p>
          </div>
        )}
          </div>
           
        </form>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5e3bee" fillOpacity="1" d="M0,0L12.6,21.3C25.3,43,51,85,76,96C101.1,107,126,85,152,85.3C176.8,85,202,107,227,101.3C252.6,96,278,64,303,74.7C328.4,85,354,139,379,170.7C404.2,203,429,213,455,208C480,203,505,181,531,165.3C555.8,149,581,139,606,122.7C631.6,107,657,85,682,69.3C707.4,53,733,43,758,58.7C783.2,75,808,117,834,149.3C858.9,181,884,203,909,202.7C934.7,203,960,181,985,181.3C1010.5,181,1036,203,1061,186.7C1086.3,171,1112,117,1137,117.3C1162.1,117,1187,171,1213,176C1237.9,181,1263,139,1288,101.3C1313.7,64,1339,32,1364,16C1389.5,0,1415,0,1427,0L1440,0L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
      </svg>
      </section>
    );
  }
  
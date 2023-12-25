import  ProfilePhoto  from  "../../assets/me4.jpg";

export default function Aboutme() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src= {ProfilePhoto} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            Hello there! 👋 I'm Aayush Sharma, a passionate and dedicated 
            Web Developer based in New Delhi. With a strong background in 
            development, I bring creativity and innovation to every project 
            I undertake. I also love solving problems and learning new things.
            </p>
            <p className="hero--section-description">
              Besides coding, I enjoy playing video games, listening to music.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
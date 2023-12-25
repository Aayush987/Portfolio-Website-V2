export default function HeroSection() {
  const resumeLink = "https://drive.google.com/file/d/1LAan-umumnqq4J4xybQXEwBb2YuG1IzG/view";

  const handleViewResume = () => {
    window.open(resumeLink, '_blank');
  };

    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Aayush</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            Passionate about crafting robust and user-friendly web applications that leave a lasting impact.
              <br /> Let's build something amazing together!
            </p>
          </div>
          <button className="btn btn-primary resume" onClick={handleViewResume}>View Resume</button>
        </div>
        <div className="hero--section--img">
        <iframe src="https://lottie.host/embed/83f9af60-7bdb-42b2-8d45-905f55a4de97/3Fv2aFpQ9M.json"></iframe>
          {/* <img className="hero-photo" src="../public/profile.svg" alt="Hero Section" /> */}
        </div>
      </section>
    );
  }
  
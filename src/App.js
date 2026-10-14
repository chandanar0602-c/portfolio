import './App.css';

function App() {
  const skills = ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Data Science'];

  const projects = [
    {
      title: 'Drowsiness Detection Smart Glasses',
      description:
        'An IoT-based safety project that detects signs of drowsiness and alerts the user.',
      tags: 'Arduino · IoT · Sensors',
    },
    {
      title: 'Anime Frequency Studio 🌌',
      description:
        'A creative space for anime music, frequency sounds, recommendations, and relaxation.',
      tags: 'HTML · CSS · JavaScript',
    },
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">☾ CHANDANA</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="moon">☾</div>
          <p className="eyebrow">WELCOME TO MY UNIVERSE</p>
          <h1>Hi, I'm <span>Chandana R</span></h1>
          <h2>Data Science Student ✦</h2>
          <p className="intro">
            Exploring data, building ideas, and turning curiosity
            into meaningful projects.
          </p>
          <a className="primary-button" href="#projects">Explore My Work ↗</a>
          <p className="hero-note">✦ Dream big. Learn endlessly. Shine quietly. ✦</p>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curious Mind, <span>Infinite Possibilities</span></h2>
          <p>
            I'm Chandana, an undergraduate Data Science student interested
            in programming, technology, and creative problem-solving.
            I'm continuously learning and building projects that turn
            ideas into reality.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I'M LEARNING</p>
          <h2>My <span>Skills</span></h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">THINGS I'VE BEEN BUILDING</p>
          <h2>Featured <span>Projects</span></h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-symbol">✧</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tags">{project.tags}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certificates">
          <p className="eyebrow">MY LEARNING JOURNEY</p>
          <h2>Certificates <span>& Achievements</span></h2>
          <p>Certificates and achievements will be added here as I grow.</p>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an idea? <span>Let's talk.</span></h2>
          <p>I'm open to learning opportunities, internships, and collaborations.</p>
          <a className="primary-button" href="mailto:chandanar0602@gmail.com">
            Email Me ✉
          </a>
        </section>
      </main>

      <footer>
        <p>Made with ♡ by Chandana R</p>
        <p>© {new Date().getFullYear()} · Guided by curiosity, inspired by the moon ☾</p>
      </footer>
    </div>
  );
}

export default App;
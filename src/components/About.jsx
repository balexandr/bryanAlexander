function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <span className="section-number">01</span>
        <h2>About</h2>
      </div>
      <div className="about-layout">
        <div className="about-text">
          <p className="about-lead">
            I'm a developer who believes great software should feel
            <em> inevitable</em> — like it couldn't have been built any other way.
          </p>
          <p>
            I obsess over the details: the animation that guides your eye, the 
            architecture that scales, the interface that disappears. Every project 
            is a chance to get closer to that standard.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <h3>Stack</h3>
            <div className="detail-list">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>TypeScript</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="detail-block">
            <h3>Also</h3>
            <div className="detail-list">
              <span>UI/UX Design</span>
              <span>Git & GitHub</span>
              <span>HTML & CSS</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

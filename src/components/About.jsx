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
            15+ years of shipping software, zero LinkedIn influencer posts.
            I'm a <em>Full-Stack Software Engineer</em> out of Philly who'd rather
            write clean code than a catchy standup update.
          </p>
          <p>
            I've built everything from veteran-facing government services to
            eCommerce platforms processing payments around the clock. I mentor
            engineers, present to stakeholders, keep dashboards green, and
            occasionally have strong opinions about documentation. Currently
            helping veterans at Ad Hoc LLC — before that, I spent a decade making
            sure online stores didn't break at 2 AM.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <h3>Stack</h3>
            <div className="detail-list">
              <span>Ruby on Rails</span>
              <span>Elixir / Phoenix</span>
              <span>React</span>
              <span>Python / Django</span>
              <span>GraphQL</span>
              <span>SQL</span>
            </div>
          </div>
          <div className="detail-block">
            <h3>Also</h3>
            <div className="detail-list">
              <span>AWS</span>
              <span>Docker</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>DataDog</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

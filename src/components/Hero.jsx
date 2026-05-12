function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Bryan Alexander</p>
        <h1 className="hero-title">
          <span className="hero-line">Creative</span>
          <span className="hero-line">
            Developer <span className="hero-ampersand">&</span>
          </span>
          <span className="hero-line hero-italic">Designer</span>
        </h1>
        <div className="hero-footer">
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to work
          </div>
          <div className="hero-scroll">
            <span className="scroll-line"></span>
            <span className="scroll-text">Scroll</span>
          </div>
          <a href="#projects" className="hero-cta">View work ↗</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

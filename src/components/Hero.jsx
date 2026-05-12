function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Bryan Alexander</p>
        <h1 className="hero-title">
          <span className="hero-line">Still Cooler</span>
          <span className="hero-line">Than an</span>
          <span className="hero-line hero-italic">Agency</span>
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
          <a href="#work" className="hero-cta">View work ↗</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="about-header">
            <span className="section-number">03</span>
            <h2>Say hello</h2>
          </div>
          <p className="contact-blurb">
            Got an idea, a project, or just want to chat? I'd love to hear from you. 
            Let's make something worth talking about.
          </p>
          <div className="contact-links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="contact-right">
          {submitted ? (
            <div className="success-msg">
              <span className="success-icon">✓</span>
              <p>Message sent. I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Send it ↗</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) setSubmitted(true)
      })
      .catch(() => {})
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="about-header">
            <span className="section-number">04</span>
            <h2>Say hello</h2>
          </div>
          <p className="contact-blurb">
            Got an idea, a project, or just want to chat? I'd love to hear from you. 
            Let's make something worth talking about.
          </p>
          <div className="contact-links">
            <a href="mailto:bryanau@gmail.com">bryanau@gmail.com</a>
            <a href="https://github.com/balexandr" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://linkedin.com/in/bryanalexandr" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="contact-right">
          {submitted ? (
            <div className="success-msg">
              <span className="success-icon">✓</span>
              <p>Message sent. I'll be in touch soon.</p>
            </div>
          ) : (
            <form
              className="contact-form"
              action="https://formsubmit.co/bryanau@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New message from bryanalexander.co" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required />
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

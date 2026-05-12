function Work() {
  const sites = [
    {
      title: 'Wild Restore',
      description: 'Website for Wildlife Restoration Partnerships — protecting and restoring wildlife around the world.',
      url: 'https://wildrestore.com/',
      image: 'https://placehold.co/600x400/edeae4/5a6340?text=Wild+Restore',
      tags: ['WordPress', 'Redesign'],
      status: 'Coming Soon',
    },
    {
      title: 'Justine Giordano',
      description: 'Portfolio site for a Philadelphia-based abstract artist inspired by oceans, weather, and nature.',
      url: 'https://www.justinegiordano.com/',
      image: 'https://placehold.co/600x400/edeae4/5a6340?text=Justine+Giordano',
      tags: ['Portfolio', 'Art'],
      status: 'Coming Soon',
    },
  ]

  const statusColor = {
    'In Progress': 'var(--olive)',
    'Coming Soon': 'var(--clay)',
    'Live': 'var(--olive-dark)',
  }

  return (
    <section id="work" className="work">
      <div className="about-header">
        <span className="section-number">02</span>
        <h2>Recent Work</h2>
      </div>
      <div className="work-grid">
        {sites.map((site, i) => (
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
            key={i}
          >
            <div className="work-thumb">
              <img src={site.image} alt={site.title} />
            </div>
            <div className="work-card-body">
              <div className="work-card-header">
                <h3>{site.title}</h3>
                <span
                  className="work-status"
                  style={{ '--status-color': statusColor[site.status] || 'var(--text-muted)' }}
                >
                  <span className="status-indicator"></span>
                  {site.status}
                </span>
              </div>
              <p>{site.description}</p>
              <div className="work-card-footer">
                <div className="tags">
                  {site.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Work

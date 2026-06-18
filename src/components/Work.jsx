import evoMedicalSupplier from '../assets/evo_medical_supplier.png'
import tarynMcCarty from '../assets/taryn_mccarty.png'
import noodleGames from '../assets/noodle_games.png'

function Work() {
  const sites = [
    {
      title: 'Evolution Medical Supplier',
      description: 'A fast, clean healthcare storefront built to showcase medical supplies with responsive layout and modern product discovery.',
      url: 'https://evomedicalsupplier.com/',
      image: evoMedicalSupplier,
      tags: ['Healthcare', 'React'],
      status: 'Live',
    },
    {
      title: 'Taryn McCarty',
      description: 'Personal portfolio for a venture architect and founding partner of Ventnor Ventures — 2024 Nasdaq Women to Watch with 15+ years in emerging tech and esports.',
      url: 'https://tarynmccarty.com/',
      image: tarynMcCarty,
      tags: ['Portfolio', 'React'],
      status: 'Live',
    },
    {
      title: 'Noodle Games',
      description: 'Daily mini-game hub — a suite of quick, no-login puzzle games served fresh every day.',
      url: 'https://noodlegames.co/',
      image: noodleGames,
      tags: ['React', 'Games'],
      status: 'Live',
    },
    {
      title: 'Wild Restore',
      description: 'Website for Wildlife Restoration Partnerships — protecting and restoring wildlife around the world.',
      url: 'https://wildrestore.com/',
      image: 'https://placehold.co/600x400/edeae4/5a6340?text=Wild+Restore',
      tags: ['WordPress', 'Redesign'],
      status: 'Coming Soon',
    },
    {
      title: 'Justine Giordano Art',
      description: 'Portfolio site for a Philadelphia-based abstract artist inspired by oceans, weather, and nature.',
      url: 'https://www.justinegiordano.com/',
      image: 'https://placehold.co/600x400/edeae4/5a6340?text=Justine+Giordano+Art',
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

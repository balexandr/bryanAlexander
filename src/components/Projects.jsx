const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application with real-time updates and a sleek, modern interface.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2026',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Interactive dashboard with real-time data visualization that tells a story.',
    tags: ['JavaScript', 'D3.js', 'CSS'],
    year: '2025',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Mobile-first e-commerce platform with seamless checkout and modern UI patterns.',
    tags: ['React', 'Stripe', 'Firebase'],
    year: '2025',
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="about-header">
        <span className="section-number">02</span>
        <h2>Selected Work</h2>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a href={project.link} className="project-row" key={index}>
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-meta">
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <span className="project-year">{project.year}</span>
            </div>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects

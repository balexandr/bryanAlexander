import { useState, useEffect } from 'react'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/balexandr/starred?per_page=100')
      .then((res) => res.json())
      .then((data) => {
        const own = data
          .filter((repo) => repo.owner.login === 'balexandr')
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        setRepos(own)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="about-header">
        <span className="section-number">03</span>
        <h2>The Sandbox</h2>
      </div>
      <div className="projects-list">
        {loading ? (
          <p style={{ padding: '2rem', color: 'var(--text-muted)' }}>Loading repos...</p>
        ) : repos.length === 0 ? (
          <p style={{ padding: '2rem', color: 'var(--text-muted)' }}>No repos found.</p>
        ) : (
          repos.map((repo, index) => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row"
              key={repo.id}
            >
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-info">
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description yet.'}</p>
              </div>
              <div className="project-meta">
                <div className="tags">
                  {repo.language && <span className="tag">{repo.language}</span>}
                  {repo.stargazers_count > 0 && (
                    <span className="tag">★ {repo.stargazers_count}</span>
                  )}
                </div>
                <span className="project-year">
                  {new Date(repo.pushed_at).getFullYear()}
                </span>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))
        )}
      </div>
    </section>
  )
}

export default Projects

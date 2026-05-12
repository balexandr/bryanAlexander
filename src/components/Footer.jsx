function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">BA.</span>
        <p>&copy; {new Date().getFullYear()} Bryan Alexander</p>
        <span className="footer-back">
          <a href="#">Back to top ↑</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

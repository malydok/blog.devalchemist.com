import React from "react"
import { Link } from "gatsby"
import "../css/index.css"

const Layout = ({ location, title, description, children }) => {
  const isHome = location.pathname === `${__PATH_PREFIX__}/`
  const LogoElement = isHome ? "h1" : "span"

  const logoInner = (
    <LogoElement className="site-name">
      <div className="site-name__image">
        <svg
          className="site-name__horns"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 71 100"
          width="42"
          role="presentation"
        >
          <path d="M58.627 56.034l-10.35-27.41s15.944-1.4 13.425-13.706C59.637 4.81 53.592 1.56 52.286.978 50.978.393 51.634.27 51.634.27s9.754.433 13.985 7.376c4.474 7.343 8.39 20.698-.56 32.446-8.95 11.747-6.433 15.942-6.433 15.942zM12.362 56.034l10.35-27.41s-15.944-1.4-13.428-13.707C11.352 4.81 17.398 1.56 18.704.977c1.304-.584.65-.707.65-.707S9.6.703 5.37 7.646c-4.476 7.342-8.392 20.698.56 32.446 8.95 11.747 6.432 15.942 6.432 15.942z" />
        </svg>
        <svg
          className="site-name__letter"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 71 100"
          width="42"
          role="presentation"
        >
          <path d="M3.228 99.712l12.75-5.092 19.26-56.215 19.51 56.035 12.62 5.272L39.86 25.326h-9.188" />
        </svg>
      </div>

      <span className="site-name__text">{title}</span>
    </LogoElement>
  )

  return (
    <div className="sections-wrap">
      <header className="site-header">
        <Link to={"/"} className="home-link" title="All articles">
          {logoInner}
          <p className="site-description">{description}</p>
        </Link>
      </header>
      <main className="section-main">{children}</main>
      <footer className="site-footer">
        <p>
          Written by <a href="mailto:marek@devalchemist.com">Marek</a> in the
          rare times he's inspired.
        </p>
        <p>No data collecting or cookie storing. Suck it GDPR.</p>
      </footer>
    </div>
  )
}

export default Layout

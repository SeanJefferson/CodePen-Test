import React from 'react'
import { Link } from 'gatsby'
import '../styles/stylesheet.css'

const Nav = () => (
  <div id="nav">
    <Link
      to="/learnMore"
      style={{ paddingLeft: '30px', textDecoration: 'none' }}
      className="nav-item"
    >
      About
    </Link>

    <a
      href="https://www.eventbrite.co.uk/e/codepen-hull-concurrency-coding-for-parallel-processing-tickets-51658640384?aff=erelexpmlt"
      id="navBookNow"
      className="nav-item"
    >
      Book Now
    </a>

    <Link
      to="/passTalks"
      style={{ paddingLeft: '30px', textDecoration: 'none' }}
      className="nav-item"
    >
      Pass Talks
    </Link>
    <Link
      to="/contact"
      style={{ paddingLeft: '30px', textDecoration: 'none' }}
      className="nav-item"
    >
      Contact
    </Link>
  </div>
)

export default Nav

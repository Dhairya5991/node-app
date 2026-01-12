import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sections = [
    "skills",
    "experience",
    "projects",
    "education",
    "management",
    "contact"
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">DP</div>

        {/* Links */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          {sections.map(sec => (
            <Link
              key={sec}
              to={sec}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
            >
              {sec.toUpperCase()}
            </Link>
          ))}

          <a href="/resume.pdf" download className="nav-btn">
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

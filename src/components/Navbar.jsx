import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#home" className="nav-brand" aria-label="Meghana Nagaraj Home">
          <span className="brand-badge">
            <span className="brand-letters">{personalInfo.initials}</span>
          </span>
          <div className="brand-text-wrapper">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-subtitle">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls & Socials */}
        <div className="nav-actions">
          <div className="nav-social-links">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="nav-social-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <a href="#contact" className="btn btn-primary nav-cta-btn">
            <span>Connect</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary mobile-social-item"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary mobile-social-item"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary mobile-social-item"
              >
                <InstagramIcon size={16} />
                <span>Instagram</span>
              </a>
            </div>

            <a
              href="#contact"
              className="btn btn-primary mobile-cta-btn"
              onClick={handleNavClick}
            >
              Say Hello
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

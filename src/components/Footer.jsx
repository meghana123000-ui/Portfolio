import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="footer-brand-side">
            <a href="#home" className="footer-brand">
              <span className="brand-badge">
                <span className="brand-letters">{personalInfo.initials}</span>
              </span>
              <span className="footer-brand-name">{personalInfo.name}</span>
            </a>
            <p className="footer-tagline">
              First-Year Engineering Student &bull; Aspiring Software Developer building clean, user-centric web applications.
            </p>
          </div>

          <div className="footer-links-side">
            <nav className="footer-nav" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social-side">
            <div className="footer-social-icons">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Designed &amp; built with curiosity and React.
          </p>
          <div className="footer-badge-pill">
            <span>Engineering Student Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

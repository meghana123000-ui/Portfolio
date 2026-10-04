import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        {/* Left Column: Introductions & CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="status-dot" aria-hidden="true"></span>
            <span className="hero-badge-text">{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>.
            <span className="hero-title-sub">
              First-Year Engineering Student &amp; Developer.
            </span>
          </h1>

          <p className="hero-description">
            {personalInfo.shortBio}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Presence Row */}
          <div className="hero-social-row">
            <span className="hero-social-label">Find me on:</span>
            <div className="hero-social-items">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                aria-label="Meghana's GitHub"
                title={`GitHub: @${personalInfo.socials.github.username}`}
              >
                <GithubIcon size={18} />
                <span>github/{personalInfo.socials.github.username}</span>
              </a>
              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                aria-label="Meghana's LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                aria-label="Meghana's Instagram"
                title={`Instagram: @${personalInfo.socials.instagram.username}`}
              >
                <InstagramIcon size={18} />
                <span>@{personalInfo.socials.instagram.username}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code & Tech Bento Showcase */}
        <div className="hero-showcase">
          <div className="hero-code-card glass-card">
            {/* Window Header */}
            <div className="code-window-header">
              <div className="window-controls" aria-hidden="true">
                <span className="win-dot dot-red"></span>
                <span className="win-dot dot-yellow"></span>
                <span className="win-dot dot-green"></span>
              </div>
              <div className="window-filename">
                <Code2 size={14} className="window-file-icon" />
                <span>MeghanaProfile.ts</span>
              </div>
              <div className="window-lang-badge">TypeScript</div>
            </div>

            {/* Code Editor Body */}
            <div className="code-window-body">
              <pre>
                <code>
                  <span className="c-keyword">interface</span> <span className="c-type">Engineer</span> {'{\n'}
                  {'  '}name: <span className="c-string">"{personalInfo.name}"</span>;{'\n'}
                  {'  '}academicStage: <span className="c-string">"First-Year B.E."</span>;{'\n'}
                  {'  '}curiosityLevel: <span className="c-number">Infinity</span>;{'\n'}
                  {'  '}passions: [<span className="c-string">"Algorithms"</span>, <span className="c-string">"Modern Web"</span>, <span className="c-string">"UI Systems"</span>];{'\n'}
                  {'  '}activelyLearning: <span className="c-string">"DSA with C++ &amp; Full-Stack React"</span>;{'\n'}
                  {'  '}openForOpportunities: <span className="c-boolean">true</span>;{'\n'}
                  {'}'};
                </code>
              </pre>
            </div>

            {/* Terminal Live Output Footer */}
            <div className="code-window-footer">
              <div className="terminal-prompt">
                <Terminal size={14} className="terminal-icon" />
                <span>status: ready to build &amp; collaborate</span>
              </div>
              <span className="terminal-badge">
                <Sparkles size={13} />
                <span>v1.0.0</span>
              </span>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="floating-badge badge-top-right">
            <span className="floating-icon">💻</span>
            <div>
              <div className="floating-label">Primary Stack</div>
              <div className="floating-val">C++ &bull; React &bull; JS</div>
            </div>
          </div>

          <div className="floating-badge badge-bottom-left">
            <span className="floating-icon">🎓</span>
            <div>
              <div className="floating-label">Current Course</div>
              <div className="floating-val">Data Structures &amp; Math</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

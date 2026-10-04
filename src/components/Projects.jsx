import { useState } from 'react';
import { FolderGit2, ExternalLink, Layers, FileEdit, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Apps', 'Algorithms'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </span>
          <h2 className="section-title">Academic &amp; Personal Projects</h2>
          <p className="section-subtitle">
            A selection of practical applications and algorithmic experiments I have built while exploring software engineering.
          </p>
        </div>

        {/* Developer Customization Hint Banner */}
        <div className="projects-edit-banner glass-card">
          <div className="edit-banner-left">
            <div className="edit-banner-icon-box">
              <FileEdit size={18} className="text-cyan" />
            </div>
            <div>
              <span className="edit-banner-title">Easily Customizable Portfolio Cards</span>
              <p className="edit-banner-desc">
                You can add, edit, or remove any project in <code className="code-pill">src/data/portfolioData.js</code>.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.socials.github.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary edit-banner-btn"
          >
            <GithubIcon size={16} />
            <span>Explore All on GitHub</span>
          </a>
        </div>

        {/* Filter Controls */}
        <div className="projects-filter-bar">
          <div className="filter-pill-group">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="projects-count-label">
            Showing <strong>{filteredProjects.length}</strong> projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              {/* Project Card Header / Banner */}
              <div className="project-card-header">
                <div className="project-category-badge">
                  <Layers size={13} />
                  <span>{project.category}</span>
                </div>
                <div className="project-status-pill">
                  <span className="project-status-dot"></span>
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="project-highlights">
                  <h4 className="highlights-heading">Key Features &amp; Implementation:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-bullet" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-stack" aria-label="Technologies used">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary project-action-btn"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GithubIcon size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo === '#' ? project.github : project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary project-action-btn"
                  aria-label={`View ${project.title} live demo`}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

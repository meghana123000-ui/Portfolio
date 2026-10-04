import { BookOpen, Cpu, Rocket, Users, Code, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={22} className="pillar-icon text-indigo" />,
      title: "Algorithmic Foundation",
      description: "Strengthening core problem-solving with C/C++, focusing on data structures, algorithmic complexity, and efficient logic."
    },
    {
      icon: <Code size={22} className="pillar-icon text-cyan" />,
      title: "Modern Web Engineering",
      description: "Building responsive, accessible web interfaces using React, JavaScript, and modern component-based design systems."
    },
    {
      icon: <Rocket size={22} className="pillar-icon text-purple" />,
      title: "Builder's Mindset",
      description: "Believing that true learning comes from shipping projects, exploring new tools, and debugging errors hands-on."
    },
    {
      icon: <Users size={22} className="pillar-icon text-emerald" />,
      title: "Collaborative Spirit",
      description: "Engaging in college tech clubs, collaborative hackathons, and seeking mentorship from experienced engineers."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={14} />
            <span>About Me</span>
          </span>
          <h2 className="section-title">
            Passionate About Solving Problems &amp; Building Experiences
          </h2>
          <p className="section-subtitle">
            A glimpse into my background, academic mindset, and what inspires me to write code everyday.
          </p>
        </div>

        {/* Bento Grid: Story & Stats */}
        <div className="about-bento-grid">
          {/* Main Story Narrative Card */}
          <div className="about-story-card glass-card">
            <div className="story-card-header">
              <span className="story-badge">My Journey</span>
              <h3 className="story-heading">From Foundational C to Modern Web Development</h3>
            </div>

            <div className="story-card-body">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="story-paragraph">
                  {para}
                </p>
              ))}
            </div>

            <div className="story-highlights-list">
              <div className="story-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Pursuing Bachelor of Engineering with high dedication</span>
              </div>
              <div className="story-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Eager to contribute to open-source and student developer communities</span>
              </div>
              <div className="story-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Always excited for summer/winter internship opportunities</span>
              </div>
            </div>
          </div>

          {/* Stats Sidebar Cards */}
          <div className="about-stats-container">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card">
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Values Row */}
        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-card">
              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

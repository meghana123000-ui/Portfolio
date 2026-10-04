import { useState } from 'react';
import { Wrench, Code2, Globe, Terminal, Brain, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  // Flatten or filter skills
  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((c) => c.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={20} className="text-cyan" />;
      case 'Web & Frameworks':
        return <Globe size={20} className="text-indigo" />;
      case 'Developer Tools':
        return <Terminal size={20} className="text-purple" />;
      case 'CS Fundamentals':
        return <Brain size={20} className="text-emerald" />;
      default:
        return <Wrench size={20} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} />
            <span>Technical Toolkit</span>
          </span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Languages, frameworks, and foundational computer science topics I practice both in my curriculum and personal projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-tabs" role="tablist" aria-label="Skills categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`skill-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid-wrapper">
          {filteredCategories.map((group) => (
            <div key={group.category} className="skill-category-card glass-card">
              <div className="skill-category-header">
                <div className="skill-category-icon-box">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="skill-category-title">{group.category}</h3>
                  <p className="skill-category-desc">{group.description}</p>
                </div>
              </div>

              <div className="skills-items-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-tile">
                    <div className="skill-item-top">
                      <span className="skill-item-name">{skill.name}</span>
                      <span className="skill-item-level-badge">{skill.level}</span>
                    </div>
                    <div className="skill-item-highlight">
                      <Sparkles size={12} className="skill-sparkle-icon" />
                      <span>{skill.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Note for Visitors */}
        <div className="skills-footer-note">
          <p>
            💡 <span className="text-secondary">Note:</span> As a first-year student, I am expanding my toolkit daily through college labs and online open-source courses.
          </p>
        </div>
      </div>
    </section>
  );
}

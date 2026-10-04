import { GraduationCap, Calendar, MapPin, Award, BookCheck, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </span>
          <h2 className="section-title">Education &amp; Foundations</h2>
          <p className="section-subtitle">
            My academic journey, coursework, and the theoretical fundamentals supporting my software development path.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="education-card-top">
                <div className="education-badge-group">
                  <span className="education-status-badge">
                    <span className="status-dot" style={{ width: 6, height: 6 }}></span>
                    <span>{edu.status}</span>
                  </span>
                  <div className="education-period">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="education-location">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="education-main-info">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-desc">{edu.description}</p>
              </div>

              <div className="education-highlights-box">
                <div className="highlights-header-label">
                  <Award size={15} className="text-amber" />
                  <span>Key Coursework &amp; Achievements</span>
                </div>
                <ul className="education-highlights-list">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="education-highlight-item">
                      <BookCheck size={14} className="text-cyan highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning Pill / Badge Card */}
        <div className="additional-learning-card glass-card">
          <div className="learning-icon-box">
            <Sparkles size={20} className="text-purple" />
          </div>
          <div className="learning-content">
            <h4 className="learning-title">Continuous Independent Learning</h4>
            <p className="learning-text">
              Supplementing college syllabus with self-paced tracks in Object-Oriented System Design, LeetCode algorithmic problem solving, and modern frontend frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

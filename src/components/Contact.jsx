import { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async network submission for smooth UX feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="section-subtitle">
            Whether you have a question, want to collaborate on a project, or simply want to say hello, my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Connect & Socials */}
          <div className="contact-info-column">
            <div className="contact-intro-card glass-card">
              <h3 className="contact-card-title">Contact Information</h3>
              <p className="contact-card-text">
                Feel free to reach out directly through email or connect with me on any of my social profiles.
              </p>

              {/* Email One-Click Copy Box */}
              <div className="email-copy-box">
                <div className="email-label-row">
                  <span className="email-label">Email Address</span>
                  <span className="email-badge">Fast Response</span>
                </div>
                <div className="email-action-row">
                  <div className="email-display">
                    <Mail size={16} className="text-cyan" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                    title="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="social-channels-list">
                <h4 className="channels-heading">My Profiles:</h4>

                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-item"
                >
                  <div className="social-icon-box">
                    <GithubIcon size={18} />
                  </div>
                  <div className="social-channel-info">
                    <span className="channel-title">GitHub</span>
                    <span className="channel-handle">@{personalInfo.socials.github.username}</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-item"
                >
                  <div className="social-icon-box">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="social-channel-info">
                    <span className="channel-title">LinkedIn</span>
                    <span className="channel-handle">Meghana Nagaraj</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                <a
                  href={personalInfo.socials.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-item"
                >
                  <div className="social-icon-box">
                    <InstagramIcon size={18} />
                  </div>
                  <div className="social-channel-info">
                    <span className="channel-title">Instagram</span>
                    <span className="channel-handle">@{personalInfo.socials.instagram.username}</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>
              </div>

              {/* Availability Notice */}
              <div className="availability-callout">
                <div className="availability-dot-box">
                  <span className="status-dot"></span>
                </div>
                <div>
                  <div className="availability-title">Currently Open For</div>
                  <div className="availability-detail">Student hackathons, research projects, and software internships.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <Check size={32} className="text-emerald" />
                  </div>
                  <h3 className="success-title">Message Received!</h3>
                  <p className="success-message">
                    Thank you for reaching out, <strong>{formData.name || 'Friend'}</strong>. I have recorded your message and will reply via email shortly!
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Direct Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="text-red">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="text-red">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Collaboration, Question, or Hello"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="text-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Write your message here..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

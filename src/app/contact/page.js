'use client'

import { useState } from 'react';
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        batch: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Page Header */}
          {/* <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Contact Us</h1>
            <p className={styles.pageSubtitle}>Get in Touch with ONUSURJO-22 Community</p>
          </div> */}

          {/* Contact Section */}
          <div className={styles.contactSection}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Our Location</h3>
                  <p>
                    Pabna Collectorate Model School and College<br />
                    Pabna, Rajshahi Division, Bangladesh
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaPhone />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Phone Number</h3>
                  <p><a href="tel:+8801XXXXXXXXX">+880 1XXX-XXXXXX</a></p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:contact@onusurjo22.com">
                      contact@onusurjo22.com
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FaGraduationCap/>
                </div>
                <div className={styles.contactDetails}>
                  <h3>Batch Information</h3>
                  <p>
                    SSC Batch of 2022<br />
                    Alumni Network
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                <h3>Follow Us</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    <FaLinkedin/>
                  </a>
                  <a href="#" className={styles.socialIcon} aria-label="YouTube">
                    <FaYoutube/>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formControl}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formControl}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.formControl}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="batch">Batch/Graduation Year</label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    className={styles.formControl}
                    placeholder="e.g., SSC 2022"
                    value={formData.batch}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.formControl}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formControl}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
            <h2 className={styles.sectionTitle}>Find Us Here</h2>
            <div className={styles.mapPlaceholder}>
              <i
                className="fas fa-map-marked-alt"
                style={{ fontSize: '3rem', marginRight: '1rem' }}
              ></i>
              Interactive Map - Pabna Collectorate Model School and College
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
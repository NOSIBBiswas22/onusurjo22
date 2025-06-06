'use client'

import { useState, useEffect } from 'react';
import styles from './Events.module.css';
import { FaStar, FaGraduationCap, FaCalendar, FaClock, FaMapMarkerAlt, FaTicketAlt, FaInfoCircle } from 'react-icons/fa';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Events data array
  const eventsData = [
    {
      id: 1,
      category: 'reunion',
      title: 'Annual Grand Reunion 2025',
      description: 'Our biggest celebration with cultural programs, awards, and nostalgic moments. Join us for an unforgettable evening!',
      date: { day: '15', month: 'Dec' },
      time: '6:00 PM',
      location: 'Dhaka',
      status: 'upcoming',
      participants: '125 attending',
      avatars: ['A', 'B', 'C', '+']
    },
    {
      id: 2,
      category: 'cultural',
      title: 'বাংলা সাংস্কৃতিক সন্ধ্যা',
      description: 'An evening dedicated to Bengali culture with traditional music, dance, poetry recitation, and cultural performances.',
      date: { day: '28', month: 'Nov' },
      time: '7:00 PM',
      location: 'Chittagong',
      status: 'upcoming',
      participants: '85 attending',
      avatars: ['R', 'S', 'T']
    },
    {
      id: 3,
      category: 'networking',
      title: 'Professional Networking Meet',
      description: 'Connect with fellow alumni, share career experiences, and explore collaboration opportunities in various industries.',
      date: { day: '05', month: 'Dec' },
      time: '5:30 PM',
      location: 'Sylhet',
      status: 'upcoming',
      participants: '45 attending',
      avatars: ['M', 'N']
    },
    {
      id: 4,
      category: 'sports',
      title: 'Alumni Football Tournament',
      description: 'Annual football championship between different batches. Come and support your team or participate in the tournament!',
      date: { day: '22', month: 'Nov' },
      time: '9:00 AM',
      location: 'Rajshahi',
      status: 'upcoming',
      participants: '68 players',
      avatars: ['X', 'Y', 'Z']
    },
    {
      id: 5,
      category: 'workshop',
      title: 'Tech Skills Workshop',
      description: 'Learn the latest technologies and programming skills. Perfect for career advancement and staying updated with industry trends.',
      date: { day: '18', month: 'Nov' },
      time: '2:00 PM',
      location: 'Virtual Event',
      status: 'upcoming',
      participants: '92 enrolled',
      avatars: ['P', 'Q', 'R', '+']
    },
    {
      id: 6,
      category: 'cultural',
      title: 'কবিতা আবৃত্তি প্রতিযোগিতা',
      description: 'A poetry recitation competition celebrating Bengali literature and fostering cultural appreciation among alumni.',
      date: { day: '10', month: 'Oct' },
      time: '6:00 PM',
      location: 'Khulna',
      status: 'past',
      participants: '35 participated',
      isSecondary: true
    }
  ];

  // Timeline data array
  const timelineData = [
    {
      id: 1,
      date: 'Nov 18, 2025',
      title: 'Tech Skills Workshop',
      description: 'Virtual workshop on latest programming technologies and industry trends.',
      time: '2:00 PM - 5:00 PM',
      location: 'Online Event',
    },
    {
      id: 2,
      date: 'Nov 22, 2025',
      title: 'Alumni Football Tournament',
      description: 'Annual sports competition between different batches with prizes and certificates.',
      time: '9:00 AM - 6:00 PM',
      location: 'Rajshahi Stadium',
    },
    {
      id: 3,
      date: 'Nov 28, 2025',
      title: 'বাংলা সাংস্কৃতিক সন্ধ্যা',
      description: 'Cultural evening featuring traditional Bengali music, dance, and poetry performances.',
      time: '7:00 PM - 10:00 PM',
      location: 'Chittagong Cultural Center',
    },
    {
      id: 4,
      date: 'Dec 5, 2025',
      title: 'Professional Networking Meet',
      description: 'Connect with professionals from various industries and explore collaboration opportunities.',
      time: '5:30 PM - 8:30 PM',
      location: 'Sylhet Business Hub',
    },
    {
      id: 5,
      date: 'Dec 15, 2025',
      title: 'Grand Annual Reunion',
      description: 'The biggest celebration of the year with awards, cultural programs, and memorable moments.',
      time: '6:00 PM - 11:00 PM',
      location: 'Grand Ballroom, Dhaka',
    }
  ];

  useEffect(() => {
    // Counter animation for statistics
    const animateCounters = () => {
      const counters = document.querySelectorAll(`.${styles.statNumber}`);
      
      counters.forEach((counter) => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = counter.textContent.replace(/\d+/, target);
            clearInterval(timer);
          } else {
            counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
          }
        }, 20);
      });
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, observerOptions);

    // Stats animation observer
    const statsSection = document.querySelector(`.${styles.statsSection}`);
    const statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe elements
    document.querySelectorAll(`.${styles.eventCard}, .${styles.timelineItem}, .${styles.statItem}`).forEach((el) => {
      observer.observe(el);
    });

    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleEventButtonClick = (e, buttonText) => {
    e.preventDefault();
    const button = e.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
    console.log('Event button clicked:', buttonText);
  };

  // Filter events based on active filter
  const filteredEvents = eventsData.filter(event => 
    activeFilter === 'all' || event.category === activeFilter
  );

  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Events</h1>
          <p className={styles.pageSubtitle}>
            Discover upcoming events, celebrations, and memorable moments from
            our ONUSURJO-22 community
          </p>
        </div>

        {/* Featured Event */}
        <section className={styles.featuredEvent}>
          <div className={styles.featuredBadge}>
            <FaStar />
            Featured Event
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.featuredImage}>
              <FaGraduationCap />
            </div>
            <div className={styles.featuredInfo}>
              <h2>ONUSURJO-22 Annual Reunion 2025</h2>
              <p className={styles.eventDescription}>
                Join us for our biggest celebration of the year! Reconnect with
                old friends, share memories, and create new ones. This grand
                reunion will feature cultural performances, award ceremonies,
                delicious food, and much more. Don&lsquo;t miss this opportunity to
                relive the golden days!
              </p>
              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <FaCalendar />
                  <span>December 15, 2025</span>
                </div>
                <div className={styles.metaItem}>
                  <FaClock />
                  <span>6:00 PM - 11:00 PM</span>
                </div>
                <div className={styles.metaItem}>
                  <FaMapMarkerAlt />
                  <span>Grand Ballroom, Dhaka</span>
                </div>
              </div>
              <div className={styles.featuredActions}>
                <a 
                  href="#" 
                  className={styles.eventBtn}
                  onClick={(e) => handleEventButtonClick(e, 'Register Now')}
                >
                  <FaTicketAlt />
                  Register Now
                </a>
                <a 
                  href="#" 
                  className={`${styles.eventBtn} ${styles.secondary}`}
                  onClick={(e) => handleEventButtonClick(e, 'Learn More')}
                >
                  <FaInfoCircle />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className={styles.statsSection}>
          <h2 className={styles.statsTitle}>Our Event Journey</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Total Events</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Participants</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8</span>
              <span className={styles.statLabel}>Cities Covered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Years Active</span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <h2 className={styles.filterTitle}>Browse Events by Category</h2>
          <div className={styles.filterButtons}>
            {['all', 'reunion', 'cultural', 'networking', 'sports', 'workshop'].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === 'all' ? 'All Events' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Events Grid */}
        <section className={styles.eventsGrid}>
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className={styles.eventCard}
              data-filter={event.category}
            >
              <div className={styles.eventImage}>
                <i className={event.icon}></i>
                <div className={styles.eventDateBadge}>
                  <div className={styles.eventDay}>{event.date.day}</div>
                  <div className={styles.eventMonth}>{event.date.month}</div>
                </div>
                <div className={`${styles.eventStatus} ${event.status === 'upcoming' ? styles.statusUpcoming : styles.statusPast}`}>
                  {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                </div>
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventCategory}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <FaClock/>
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaMapMarkerAlt/>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className={styles.eventActions}>
                  <a 
                    href="#" 
                    className={`${styles.eventBtn} ${event.isSecondary ? styles.secondary : ''}`}
                    onClick={(e) => handleEventButtonClick(e, event.buttonText)}
                  >
                    <FaTicketAlt />
                    Join Event
                  </a>
                  <div className={styles.eventParticipants}>
                    <i className="fas fa-users"></i>
                    <span>{event.participants}</span>
                    {event.avatars && (
                      <div className={styles.participantsAvatars}>
                        {event.avatars.map((avatar, index) => (
                          <div key={index} className={styles.participantAvatar}>
                            {avatar}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Upcoming Events Timeline */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <i className="fas fa-calendar-alt"></i>
            </div>
            Upcoming Events Timeline
          </h2>
          <div className={styles.timeline}>
            {timelineData.map((timelineEvent) => (
              <div key={timelineEvent.id} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{timelineEvent.date}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.eventTitle}>{timelineEvent.title}</h3>
                  <p className={styles.eventDescription}>{timelineEvent.description}</p>
                  <div className={styles.eventMeta}>
                    <div className={styles.metaItem}>
                      <FaClock/>
                      <span>{timelineEvent.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaMapMarkerAlt/>
                      <span>{timelineEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Events;
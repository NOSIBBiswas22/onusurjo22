'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    closeMenu();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Memories', href: '/memories' },
    // { name: 'Gallery', href: '/gallery' },
    // { name: 'Alumni', href: '/alumni' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <div className="logo-container" onClick={() => handleLinkClick("Home")}>
            <Image
              src="/onusurjo_22.png"
              alt="Onusurjo 22 Logo"
              width={200}
              height={86}
              className="logo-img"
              priority
            />
          </div>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#" className="cta-button">
              Join Community
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;